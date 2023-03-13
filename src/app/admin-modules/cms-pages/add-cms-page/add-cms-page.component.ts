import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Editor } from 'ngx-editor';
import { Router } from '@angular/router';

import { AdminService } from 'src/app/service/adminservices.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-add-cms-page',
  templateUrl: './add-cms-page.component.html',
  styleUrls: ['./add-cms-page.component.scss'],
})
export class AddCmsPageComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html!: '';
  addpages!: FormGroup;
  submitted = false;

  constructor(
    private cmspageService: AdminService,
    private router: Router,
    private formbuilder: FormBuilder,
    private toastr: NgToastService
  ) { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.addpages = this.formbuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        slug: ['', Validators.required],
        status: ['', Validators.required],
      });
  }
  get title() {
    return this.addpages.get('title') as FormControl;
  }
  get description() {
    return this.addpages.get('description') as FormControl;
  }
  get slug() {
    return this.addpages.get('slug') as FormControl;
  }
  get status() {
    return this.addpages.get('status') as FormControl;
  }

  onAddPage(): void {
    this.submitted = true;
    if (this.addpages.valid) {
      this.cmspageService.createPage(this.addpages.value).subscribe(
        (response) => {
          this.router.navigate(['/admin-home/cms-page']);
          this.toastr.success({ detail: 'Success', summary: 'Added CMS Page!', sticky: true, position: 'tr', duration: 1000 })
        },
        (error: string) => {
          this.toastr.error({ detail: 'Error', summary: `${error}`, sticky: true, position: 'tr', duration: 1000 })
        }
      );
    }
  }
  OnCancel() {
    this.addpages.reset;
    this.router.navigateByUrl('/admin-home/cms-page');
  }
  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
