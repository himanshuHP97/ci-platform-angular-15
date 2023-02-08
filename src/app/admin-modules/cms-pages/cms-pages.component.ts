import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CmspageService } from './../service/cmspage.service';
import { Cmspage } from './../interface/cmspage';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-cms-pages',
  templateUrl: './cms-pages.component.html',
  styleUrls: ['./cms-pages.component.scss'],
})
export class CmsPagesComponent implements OnInit {
  cmspages: Cmspage[] = [];
  rowId!: number;
  displayStyle = 'none';
  colorStatus = '';

  constructor(private cmspageService: CmspageService, private router: Router) {}

  ngOnInit(): void {
    this.onGetPages();
  }

  showModal(id: any) {
    this.displayStyle = 'block';
    this.rowId = id;
  }
  hideModal() {
    this.displayStyle = 'none';
  }

  onGetPages(): void {
    this.cmspageService.getPages().subscribe(
      (response: Cmspage[]) => {
        if (response.length != null) {
          this.cmspages = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found CMS Page')
    );
  }

  onDeletePage(id: number) {
    this.cmspageService.deletePage(id).subscribe(
      (response: Cmspage) => {
        if (response.id != 0) {
          window.alert('Page deleted!');
          this.displayStyle = 'none';
          window.location.reload();
        } else {
          window.alert('An error occurred!');
        }
      },
      (error: any) => console.log(error)
    );
  }
}
