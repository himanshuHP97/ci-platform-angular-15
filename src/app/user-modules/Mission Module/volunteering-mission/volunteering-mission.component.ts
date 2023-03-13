import { Comment } from './../../../interface/comment';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Mission } from 'src/app/interface/mission';
import { AdminService } from 'src/app/service/adminservices.service';
import * as moment from 'moment';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

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
  comments: Comment[] = [];
  displayMode: number = 1;
  filteredComment: Comment[] = [];

  commentForm!: FormGroup;
  submitted: boolean = false;

  constructor(private service: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: NgToastService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetMission(parseInt(this.id));
    }
    this.onGetComments();
    this.commentForm = this.formBuilder.group({
      comment: [null, Validators.compose([Validators.required])],
    });
  }
  get comment() {
    return this.commentForm.get('comments') as FormControl;
  }

  onGetMission(id: number): void {
    this.service.getMission(id).subscribe({
      next: response => {
        this.mission = response
      },
      error: error => console.log(error),
    });
  }

  onGetComments(): void {
    this.service.getComments().subscribe(
      (response: Comment[]) => {
        if (response.length != null) {
          this.comments = response.filter(item => item.missionId == this.mission.id);
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
    );
  }

  PostComment() {
    this.submitted = true;
    if (this.commentForm.value == "" || this.commentForm.value == null) {
      return this.toastr.error({ detail: 'Error', summary: 'comment cannot be blank!', sticky: true, position: 'tr', duration: 1000 })
    }
    else {
      let value = {
        comment: this.commentForm.value.comment,
        userId: 1,
        missionId: this.mission.id,
        commentDate: moment().format("yyyy-MM-DDTHH:mm:ssZ"),
      }
      console.log(value);
      this.service.createComment(value).subscribe(
        (response: Comment) => {
          if (response != null) {
            this.toastr.success({ detail: 'Success', summary: 'comment added!', sticky: true, position: 'tr', duration: 1000 })
            this.onGetComments();
          }
        },
        (error: string) => {
          this.toastr.error({ detail: 'Error', summary: `${error}`, sticky: true, position: 'tr', duration: 1000 })
        }
      );
    }

  }
}


