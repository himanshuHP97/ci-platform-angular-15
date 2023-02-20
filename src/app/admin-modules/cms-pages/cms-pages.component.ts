import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { Cmspage } from 'src/app/interface/cmspage';
import { AdminService } from 'src/app/service/adminservices.service';



@Component({
  selector: 'app-cms-pages',
  templateUrl: './cms-pages.component.html',
  styleUrls: ['./cms-pages.component.scss'],
})
export class CmsPagesComponent implements OnInit, OnDestroy {
  cmspages: Cmspage[] = [];
  rowId!: number;
  displayStyle = 'none';
  colorStatus = '';
  subscriber!: Subscription;

  constructor(private cmspageService: AdminService, private router: Router,
    private toastr:NgToastService) {}

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
    this.subscriber = this.cmspageService.getPages().subscribe(
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
    this.subscriber = this.cmspageService.deletePage(id).subscribe(
      (response: Cmspage) => {
        if (response.id != 0) {
          this.toastr.success({ detail: 'Success', summary: 'cms page deleted!', sticky: true, position: 'tr', duration: 1000 });
          this.displayStyle = 'none';
          window.location.reload();
        } else {
          window.alert('An error occurred!');
        }
      },
      (error: any) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe;
  }
}
