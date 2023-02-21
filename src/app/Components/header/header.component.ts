import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Cmspage } from 'src/app/interface/cmspage';
import { AdminService } from 'src/app/service/adminservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cmspages: Cmspage[] = [];

  constructor(private service: AdminService, private router: Router,
    private toastr:NgToastService) {}

  ngOnInit(): void {
    this.onGetPages();
  }

  onGetPages(): void {
    this.service.getPages().subscribe(
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

  onLogout() {
    this.router.navigate(['/ci-platform']);
  }
}
