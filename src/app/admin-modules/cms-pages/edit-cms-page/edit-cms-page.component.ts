import { Cmspage } from './../../interface/cmspage';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Editor, Validators } from 'ngx-editor';
import { CmspageService } from '../../service/cmspage.service';

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

  constructor(
    private cmspageService: CmspageService,
    private router: Router,
    private formbulider: FormBuilder,
    public route: ActivatedRoute
  ) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetPage(parseInt(this.id));
    }
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  onGetPage(id: number): void {
    this.cmspageService.getPage(id).subscribe(
      (response: Cmspage) => {
        this.cmspage = response;
        this.editpage = this.formbulider.group({
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
    debugger;
    this.cmspageService.updatePage(this.editpage.value).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Updated CMS Page')
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
