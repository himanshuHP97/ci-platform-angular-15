import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Validators } from 'ngx-editor';
import { Mission } from 'src/app/interface/mission';
import { AdminService } from 'src/app/service/adminservices.service';

@Component({
  selector: 'app-volunteering-mission',
  templateUrl: './volunteering-mission.component.html',
  styleUrls: ['./volunteering-mission.component.scss']
})
export class VolunteeringMissionComponent {
  star: number = 5;

  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
  id!: string | null;
  mission!: Mission;
  displayMode: number = 1;

  constructor(private service: AdminService,
    private router: Router,
    private formbuilder: FormBuilder,
    public route: ActivatedRoute,
    private toastr: NgToastService) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetMission(parseInt(this.id));
    }
  }
  onGetMission(id: number): void {
    this.service.getMission(id).subscribe({
      next: response => {
        this.mission = response
      },
      error: error => console.log(error),
      complete: () => console.log(`Mission found for ${id}`)
    });
  }
}

