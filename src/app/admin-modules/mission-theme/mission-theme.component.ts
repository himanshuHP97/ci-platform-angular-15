import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Missiontheme } from 'src/app/interface/missiontheme';
import { AdminService } from 'src/app/service/adminservices.service';

@Component({
  selector: 'app-mission-theme',
  templateUrl: './mission-theme.component.html',
  styleUrls: ['./mission-theme.component.scss']
})
export class MissionThemeComponent implements OnInit, OnDestroy {
  themes: Missiontheme[] = [];
  rowId!: number;
  displayStyle = 'none';
  colorStatus = '';
  subscriber!: Subscription;

  constructor(
    private missionThemeService: AdminService,
    private router: Router,
    private toastr:NgToastService) { }

  ngOnInit(): void {
    this.onGetMissionSkills();
  }

  showModal(id: any) {
    this.displayStyle = 'block';
    this.rowId = id;
  }
  hideModal() {
    this.displayStyle = 'none';
  }

  onGetMissionSkills(): void {
    this.subscriber = this.missionThemeService.getMissionThemes().subscribe(
      (response: Missiontheme[]) => {
        if (response.length != null) {
          this.themes = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found themes!')
    );
  }

  onDeleteMission(id: number) {
    this.subscriber = this.missionThemeService.deleteMissionTheme(id).subscribe(
      (response: Missiontheme) => {
        if (response.id != 0) {
          this.toastr.success({ detail: 'Success', summary: 'Theme deleted!', sticky: true, position: 'tr', duration: 1000 });
          this.displayStyle = 'none';
          this.onGetMissionSkills();
        } else {
          this.toastr.success({ detail: 'Error', summary: 'An error occurred!', sticky: true, position: 'tr', duration: 1000 });
        }
      },
      (error: any) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe;
  }
}

