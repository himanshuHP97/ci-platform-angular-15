import { AdminService } from 'src/app/service/adminservices.service';
import { Mission } from './../../../interface/mission';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-story-share',
  templateUrl: './story-share.component.html',
  styleUrls: ['./story-share.component.scss']
})
export class StoryShareComponent implements OnInit {
  image: any = '';
  imageArray: any = [];
  selectedFile!: FileList;
  shareStoryForm!: FormGroup;
  mission: Mission[] = [];
  storyImgage: any = '';
  isFileUpload = true;
  formData = new FormData();
  constructor(public formBuilder: FormBuilder, public toast: NgToastService, public router: Router,
    private service: AdminService) { }

  ngOnInit(): void {
    this.shareStoryForm = this.formBuilder.group({
      missionId: [null, Validators.compose([Validators.required])],
      title: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      date: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required, Validators.maxLength(40000)])],
      url: [''],
      images: [null, Validators.compose([Validators.required])]
    })

    this.onGetMissions();
  }

  OnSelectedImage(event: any) {
    const files = event.target.files;
    if (files.length > 10) {
      return this.toast.error({ detail: "ERROR", summary: "You cannot add more images!", duration: 3000 });
    }
    if (files) {
      this.formData = new FormData();
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          if (file.type.indexOf("image") > -1) {
            this.imageArray.push({
              url: event.target.result,
              type: 'img'
            });
          }
          else if (file.type.indexOf("video") > -1) {
            this.imageArray.push({
              url: event.target.result,
              type: 'video'
            });
          }
        }
        reader.readAsDataURL(file);
      }
      for (let i = 0; i < files.length; i++) {
        this.formData.append('file', files[i]);
        this.formData.append('moduleName', 'ShareStory');
      }
      this.isFileUpload = true;
    }
  }

  OnRemoveImage(item: any) {
    const index: number = this.imageArray.indexOf(item);
    if (item !== -1) {
      this.imageArray.splice(index, 1);
    }
  }

  onGetMissions(): void {
    this.service.getMissions().subscribe(
      (response: Mission[]) => {
        if (response.length != null) {
          this.mission = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found mission list!')
    );
  }
}
