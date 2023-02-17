import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from 'ngx-editor';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Missiontheme } from 'src/app/interface/missiontheme';
import { AdminService } from 'src/app/service/adminservices.service';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-add-edit-theme',
  templateUrl: './add-edit-theme.component.html',
  styleUrls: ['./add-edit-theme.component.scss']
})
export class AddEditThemeComponent implements OnInit {
  themeForm!: FormGroup;
  id!: string | null;
  themes!: Missiontheme;
  submitted = false;

  constructor(
    private missionThemeService: AdminService,
    private router: Router,
    private formbuilder: FormBuilder,
    public route: ActivatedRoute,
    private toastr: NgToastService
  ) { }

  ngOnInit(): void {
    this.FormValidations();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetMissionTheme(parseInt(this.id));
    }
  }
  FormValidations() {
    this.themeForm = this.formbuilder.group({
      id: [0],
      themename: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  get themename() {
    return this.themeForm.get('themename') as FormControl;
  }
  get status() {
    return this.themeForm.get('status') as FormControl;
  }

  onGetMissionTheme(id: number): void {
    this.missionThemeService.getMissionTheme(id).subscribe(
      (response: Missiontheme) => {
        this.themes = response;
        this.themeForm = this.formbuilder.group({
          id: [this.themes.id],
          themename: [this.themes.themename, Validators.required],
          status: [this.themes.status, Validators.required],
        });
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.themeForm.valid) {
      if (this.themeForm.value != null && this.id == '0') {
        this.missionThemeService.createMissionTheme(this.themeForm.value).subscribe(
          (response) => console.log(response),
          (error: any) => console.log(error),
          () => {
            this.router.navigate(['/admin-home/mission-themes']);
            this.toastr.success({ detail: 'Success', summary: 'theme added!', sticky: true, position: 'tr', duration: 1000 })
          }
        );
      }
      else if (this.id != null && this.id != '0' && this.themeForm.value != null && this.themeForm.value != '') {
        this.missionThemeService.updateMissionTheme(this.themeForm.value).subscribe(
          (response: any) => console.log(response),
          (error: any) => console.log(error),
          () => {
            this.router.navigate(['/admin-home/mission-themes']);
            this.toastr.success({ detail: 'Success', summary: 'theme updated!', sticky: true, position: 'tr', duration: 1000 })
          }
        );
      } else {
        this.toastr.error({ detail: 'Error', summary: 'An unkown error occurred!', sticky: true, position: 'tr', duration: 1000 })
      }
    }
  }
  OnCancel() {
    this.router.navigateByUrl('/admin-home/mission-themes');
  }
}

