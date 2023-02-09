import { Missionskills } from './../../interface/missionskills';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from 'ngx-editor';
import { AdminService } from '../../service/adminservices.service';

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
    public route: ActivatedRoute
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
      name: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  get name() {
    return this.skillForm.get('name') as FormControl;
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
          name: [this.skills.name, Validators.required],
          status: [this.skills.status, Validators.required],
        });
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.skillForm.invalid) {
      return;
    }
    else {
      if (this.skillForm.value != null && this.skillForm.value != '') {
        this.missionSkillService.createMissionSkill(this.skillForm.value).subscribe(
          (response) => console.log(response),
          (error: any) => console.log(error),
          () => console.log('Added mission skill!')
        );
        this.router.navigate(['/admin-home/mission-skills']);
      }
      else if (this.id != null || this.id != '0' && (this.skillForm.value != null && this.skillForm.value != '')) {
        this.missionSkillService.updateMissionSkill(this.skillForm.value).subscribe(
          (response: any) => console.log(response),
          (error: any) => console.log(error),
          () => console.log('Updated mission skill!')
        );
        this.router.navigate(['/admin-home/mission-skills']);
      }
    }
  }
  OnCancel() {
    this.router.navigateByUrl('/admin-home/mission-skills');
  }

  ngOnDestroy(): void {

  }
}
