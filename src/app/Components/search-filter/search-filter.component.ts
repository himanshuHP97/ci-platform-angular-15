import { Mission } from './../../interface/mission';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';

import { Missionskills } from 'src/app/interface/missionskills';
import { Missiontheme } from 'src/app/interface/missiontheme';
import { AdminService } from 'src/app/service/adminservices.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searchList: BehaviorSubject<any> = new BehaviorSubject<any>('');
  mission: Mission[] = [];
  skills: Missionskills[] = [];
  themes: Missiontheme[] = [];
  value!: string;

  constructor(private service: AdminService, private router: Router,
    private toastr: NgToastService) { }
  ngOnInit(): void {

    this.onGetMissionSkills();
    this.onGetMissionThemes();
  }

  OnSerach() {
    if(this.value == "") {
      this.service.getMissions().subscribe((response) => {
        this.mission = response;
      })
    }
    else{
      this.mission = this.mission.filter(response => {
        return response.title.toLocaleLowerCase().match(this.value.toLocaleLowerCase());
      })
    }
  }
  OnEventChange(e: any) {
    this.searchList.next(e.target.value);
  }
  onGetMissionSkills(): void {
    this.service.getMissionSkills().subscribe(
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

  onGetMissionThemes(): void {
    this.service.getMissionThemes().subscribe(
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

}
