import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from 'ngx-editor';
import { AdminService } from '../../service/adminservices.service';
import { Missiontheme } from './../../interface/missiontheme';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-theme',
  templateUrl: './add-edit-theme.component.html',
  styleUrls: ['./add-edit-theme.component.scss']
})
export class AddEditThemeComponent  implements OnInit, OnDestroy {
  themeForm!: FormGroup;
  id!: string | null;
  themes!: Missiontheme;

  constructor(
    private missionThemeService: AdminService,
    private router: Router,
    private formbulider: FormBuilder,
    public route: ActivatedRoute
  ) {
    this.themeForm = this.formbulider.group({
      themename: ['', Validators.required],
      status: ['', Validators.required],
    });
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetMissionTheme(parseInt(this.id));
    }
  }

  onGetMissionTheme(id: number): void {
    this.missionThemeService.getMissionTheme(id).subscribe(
      (response: Missiontheme) => {
        this.themes = response;
        this.themeForm = this.formbulider.group({
          id: [this.themes.id],
          themename: [this.themes.themename, Validators.required],
          status: [this.themes.status, Validators.required],
        });
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    if (this.id == null || this.id == '0') {
      this.missionThemeService.createMissionTheme(this.themeForm.value).subscribe(
        (response) => console.log(response),
        (error: any) => console.log(error),
        () => console.log('Added mission theme!')
      );
      this.router.navigate(['/admin-home/mission-themes']);
    }
    else {
      this.missionThemeService.updateMissionTheme(this.themeForm.value).subscribe(
        (response: any) => console.log(response),
        (error: any) => console.log(error),
        () => console.log('Updated mission theme!')
      );
      this.router.navigate(['/admin-home/mission-themes']);
    }
  }
  OnCancel() {
    this.router.navigateByUrl('/admin-home/mission-themes');
  }

  ngOnDestroy(): void {

  }
}

