import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { Missionskills } from 'src/app/interface/missionskills';
import { AdminService } from 'src/app/service/adminservices.service';


@Component({
  selector: 'app-add-edit-skills',
  templateUrl: './add-edit-skills.component.html',
  styleUrls: ['./add-edit-skills.component.scss']
})
export class AddEditSkillsComponent implements OnInit, OnDestroy {
  skillForm!: FormGroup;
  id!: string | null;
  skills!: Missionskills;
  submitted = false;

  constructor(
    private missionSkillService: AdminService,
    private router: Router,
    private formbuilder: FormBuilder,
    public route: ActivatedRoute,
    private toastr: NgToastService
  ) { }

  ngOnInit(): void {
    this.FormValidations();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetMissionSkill(parseInt(this.id));
    }
  }
  FormValidations() {
    this.skillForm = this.formbuilder.group({
      id: [0],
      skillname: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  get skillname() {
    return this.skillForm.get('skillname') as FormControl;
  }
  get status() {
    return this.skillForm.get('status') as FormControl;
  }

  onGetMissionSkill(id: number): void {
    this.missionSkillService.getMissionSkill(id).subscribe(
      (response: Missionskills) => {
        this.skills = response;
        this.skillForm = this.formbuilder.group({
          id: [this.skills.id],
          skillname: [this.skills.skillname, Validators.required],
          status: [this.skills.status, Validators.required],
        });
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.skillForm.valid) {
      if (this.skillForm.value != null && this.id == '0') {
        this.missionSkillService.createMissionSkill(this.skillForm.value).subscribe(
          (response) => console.log(response),
          (error: any) => console.log(error),
          () => {
            this.router.navigate(['/admin-home/mission-skills']);
            this.toastr.success({ detail: 'Success', summary: 'skill added!', sticky: true, position: 'tr', duration: 1000 })
          }
        );
      }
      else if (this.id != null || this.id != '0' && (this.skillForm.value != null && this.skillForm.value != '')) {
        this.missionSkillService.updateMissionSkill(this.skillForm.value).subscribe(
          (response: any) => console.log(response),
          (error: any) => console.log(error),
          () => {
            this.router.navigate(['/admin-home/mission-skills']);
            this.toastr.success({ detail: 'Success', summary: 'skill updated!', sticky: true, position: 'tr', duration: 1000 })
          }
        );
      } else {
        this.toastr.error({ detail: 'Error', summary: 'Form is not valid', sticky: true, position: 'tr', duration: 1000 })
      }
    }
  }
  OnCancel() {
    this.skillForm.reset;
    this.router.navigateByUrl('/admin-home/mission-skills');
  }

  ngOnDestroy(): void {

  }
}
