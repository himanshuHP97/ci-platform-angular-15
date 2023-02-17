import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Editor, Validators } from 'ngx-editor';

import { Cmspage } from 'src/app/interface/cmspage';
import { AdminService } from 'src/app/service/adminservices.service';



@Component({
  selector: 'app-edit-cms-page',
  templateUrl: './edit-cms-page.component.html',
  styleUrls: ['./edit-cms-page.component.scss'],
})
export class EditCmsPageComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html!: '';
  editpage!: FormGroup;
  id!: string | null;
  cmspage!: Cmspage;
  submitted = false;

  constructor(
    private cmspageService: AdminService,
    private router: Router,
    private formbuilder: FormBuilder,
    public route: ActivatedRoute,
    private toastr: NgToastService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetPage(parseInt(this.id));
    }
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.editpage = this.formbuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        slug: ['', Validators.required],
        status: ['', Validators.required],
      });
  }
  get title() {
    return this.editpage.get('title') as FormControl;
  }
  get description() {
    return this.editpage.get('description') as FormControl;
  }
  get slug() {
    return this.editpage.get('slug') as FormControl;
  }
  get status() {
    return this.editpage.get('status') as FormControl;
  }

  onGetPage(id: number): void {
    this.cmspageService.getPage(id).subscribe(
      (response: Cmspage) => {
        this.cmspage = response;
        this.editpage = this.formbuilder.group({
          id: [this.cmspage.id],
          title: [this.cmspage.title, Validators.required],
          description: [this.cmspage.description.toString()],
          slug: [this.cmspage.slug, Validators.required],
          status: [this.cmspage.status, Validators.required],
        });
      },
      (error) => console.log(error)
    );
  }

  onEditPage(): void {
    this.submitted = true;
    if (this.editpage.valid) {
      this.cmspageService.updatePage(this.editpage.value).subscribe(
        (response) => {
          this.router.navigate(['/admin-home/cms-page']);
          this.toastr.success({ detail: 'Success', summary: 'Added CMS Page!', sticky: true, position: 'tr', duration: 1000 })
        },
        (error: any) => {
          this.toastr.error({ detail: 'Error', summary: `${error}`, sticky: true, position: 'tr', duration: 1000 })
        }
      );
    }
  }
  OnCancel() {
    this.router.navigateByUrl('/admin-home/cms-page');
  }
  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
