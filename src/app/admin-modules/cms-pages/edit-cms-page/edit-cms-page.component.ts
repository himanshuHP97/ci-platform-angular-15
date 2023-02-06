import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-edit-cms-page',
  templateUrl: './edit-cms-page.component.html',
  styleUrls: ['./edit-cms-page.component.scss']
})
export class EditCmsPageComponent  implements OnInit, OnDestroy {
  editor!: Editor;
  html!: '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}

