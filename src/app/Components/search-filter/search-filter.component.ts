import { Mission } from './../../interface/mission';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  skill: Missionskills[] = [];
  theme: Missiontheme[] = [];
  mission:Mission[] = [];
  country!: [ {'name':'India'},{'name':'USA'}]
  city!: [{'name':'Bangalore'},{'name':'Chennai'},{'name':'New York'},{'name':'Chicago'}];
  value!: string;
  searchText = '';


  constructor(private service: AdminService, private router: Router,
    private toastr: NgToastService) { }
  ngOnInit(): void {
    this.country;
    this.city;
    this.onGetMissionSkills();
    this.onGetMissionThemes();
  }

  OnSerach() {
    if (this.value == "") {
      this.service.getMissions().subscribe((response) => {
        console.log(response);
        this.mission = response;
      })
    }
    else {
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
          this.skill = response;
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
          this.theme = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found themes!')
    );
  }

}
