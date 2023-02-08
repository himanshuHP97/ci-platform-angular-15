import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { Cmspage } from '../../interface/cmspage';
import { CmspageService } from '../../service/cmspage.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-cms-page',
  templateUrl: './add-cms-page.component.html',
  styleUrls: ['./add-cms-page.component.scss'],
})
export class AddCmsPageComponent implements OnInit, OnDestroy {
  editor!: Editor;
  html!: '';
  addpages!: FormGroup;

  constructor(
    private cmspageService: CmspageService,
    private router: Router,
    private formbulider: FormBuilder
  ) {
    this.addpages = this.formbulider.group({
      title: '',
      description: '',
      slug: '',
      status: Boolean,
    });
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  onAddPage(): void {
    this.cmspageService.createPage(this.addpages.value).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Added new CMS Page')
    );
    this.router.navigate(['/admin-home/cms-page']);
  }
  OnCancel() {
    this.router.navigateByUrl('/admin-home/cms-page');
  }
  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
