import { NgToastService } from 'ng-angular-popup';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Missionskills } from 'src/app/interface/missionskills';
import { AdminService } from 'src/app/service/adminservices.service';



@Component({
  selector: 'app-mission-skills',
  templateUrl: './mission-skills.component.html',
  styleUrls: ['./mission-skills.component.scss']
})
export class MissionSkillsComponent implements OnInit, OnDestroy {
  skills: Missionskills[] = [];
  rowId!: number;
  displayStyle = 'none';
  colorStatus = '';
  subscriber!: Subscription;

  constructor(private missionSkillService: AdminService, private router: Router,
    private toastr:NgToastService) {}

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
    this.subscriber = this.missionSkillService.getMissionSkills().subscribe(
      (response: Missionskills[]) => {
        if (response.length != null) {
          this.skills = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found skills!')
    );
  }

  onDeleteMission(id: number) {
    this.subscriber = this.missionSkillService.deleteMissionSkill(id).subscribe(
      (response: Missionskills) => {
        if (response.id != 0) {
          this.toastr.success({ detail: 'Success', summary: 'Skill deleted!', sticky: true, position: 'tr', duration: 1000 });
          this.displayStyle = 'none';
          this.onGetMissionSkills();
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
