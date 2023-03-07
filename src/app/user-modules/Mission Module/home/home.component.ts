import { AdminService } from 'src/app/service/adminservices.service';
import { Mission, Image } from './../../../interface/mission';
import { Component, OnInit } from '@angular/core';
import { Missionskills } from 'src/app/interface/missionskills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mission: Mission[] = [];
  page: number = 1;
  displayMode: number = 1;
  constructor(private service: AdminService) { }
  count!:number;

  ngOnInit(): void {
    this.onGetMissions();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  onGetMissions(): void {
    this.service.getMissions().subscribe(
      (response: Mission[]) => {
        if (response.length != null) {
          this.mission = response;
          this.count = response.length;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found mission!')
    );
  }
}
