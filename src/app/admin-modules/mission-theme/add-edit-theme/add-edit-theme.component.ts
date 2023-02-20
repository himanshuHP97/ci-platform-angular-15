import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { Missiontheme } from 'src/app/interface/missiontheme';
import { AdminService } from 'src/app/service/adminservices.service';


@Component({
  selector: 'app-add-edit-theme',
  templateUrl: './add-edit-theme.component.html',
  styleUrls: ['./add-edit-theme.component.scss']
})
export class AddEditThemeComponent implements OnInit, OnDestroy {
  themeForm!: FormGroup;
  id!: string | null;
  theme!: Missiontheme;
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
      this.onGetMissionSkill(parseInt(this.id));
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

  onGetMissionSkill(id: number): void {
    this.missionThemeService.getMissionTheme(id).subscribe(
      (response: Missiontheme) => {
        this.theme = response;
        this.themeForm = this.formbuilder.group({
          id: [this.theme.id],
          themename: [this.theme.themename, Validators.required],
          status: [this.theme.status, Validators.required],
        });
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.themeForm.valid) {
      if (this.themeForm.value != null && (this.id == null || this.id == '0')) {
        this.missionThemeService.createMissionTheme(this.themeForm.value).subscribe(
          (response) => console.log(response),
          (error: any) => console.log(error),
          () => {
            this.router.navigate(['/admin-home/mission-themes']);
            this.toastr.success({ detail: 'Success', summary: 'Theme added!', sticky: true, position: 'tr', duration: 1000 })
          }
        );
      }
      else if (this.id != null || this.id != '0' && (this.themeForm.value != null && this.themeForm.value != '')) {
        this.missionThemeService.updateMissionTheme(this.themeForm.value).subscribe(
          (response: any) => console.log(response),
          (error: any) => console.log(error),
          () => {
            this.router.navigate(['/admin-home/mission-themes']);
            this.toastr.success({ detail: 'Success', summary: 'Theme updated!', sticky: true, position: 'tr', duration: 1000 })
          }
        );
      } else {
        this.toastr.error({ detail: 'Error', summary: 'Form is not valid', sticky: true, position: 'tr', duration: 1000 })
      }
    }
  }
  OnCancel() {
    this.themeForm.reset;
    this.router.navigateByUrl('/admin-home/mission-themes');
  }

  ngOnDestroy(): void {

  }
}
