import { Comment } from './../../../interface/comment';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  comments!: Comment[];
  displayMode: number = 1;
  commentForm!: FormGroup;
  submitted = false;

  constructor(private service: AdminService,
    private router: Router,
    private formbuilder: FormBuilder,
    public route: ActivatedRoute,
    private toastr: NgToastService) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetMission(parseInt(this.id));
      this.onGetComment(parseInt(this.id));
    }
    this.commentForm = this.formbuilder.group(
      {
        comment: ['', Validators.required],
      });
  }
  get comment() {
    return this.commentForm.get('comment') as FormControl;
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
  onGetComment(id: number): void {
    this.service.getComments(id).subscribe(
      (response: Comment[]) => {
        if (response.length != null) {
          this.comments = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found mission!')
    );
  }
  onSubmitComment() {
    this.submitted = true;
    if (this.commentForm.valid) {
      let value = {
      comment:this.commentForm.value,
      username:"user",
      missionId:this.mission.id,
      commentDate:Date.now()
    }
    this.service.createComment(value).subscribe(
      (response) => {
        this.toastr.success({ detail: 'Success', summary: 'comment added!', sticky: true, position: 'tr', duration: 1000 })
        this.onGetComment(this.mission.id);
      },
      (error: any) => {
        this.toastr.error({ detail: 'Error', summary: `${error}`, sticky: true, position: 'tr', duration: 1000 })
      }
    );
  }
}
}

