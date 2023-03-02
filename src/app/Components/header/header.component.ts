import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  notity: boolean = false;
  notityOption: boolean = false;
  displayStyle = 'none';

  constructor(private service: AdminService, private router: Router,
    private toastr: NgToastService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.onGetPages();
  }

  clickNotify() {
    this.notity = !this.notity;
    this.displayStyle = 'none';
  }
  notifySetting() {
    this.notityOption = !this.notityOption;
    this.displayStyle = 'block';
  }
  onCloseSetting(){
    this.displayStyle = 'none';
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
