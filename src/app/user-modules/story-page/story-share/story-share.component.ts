import { AdminService } from 'src/app/service/adminservices.service';
import { Mission, Image } from './../../../interface/mission';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-story-share',
  templateUrl: './story-share.component.html',
  styleUrls: ['./story-share.component.scss']
})
export class StoryShareComponent implements OnInit {

  imageArray: string[] = [];
  shareStoryForm!: FormGroup;
  mission: Mission[] = [];
  submitted: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public toast: NgToastService,
    public router: Router,
    private service: AdminService) { }

  ngOnInit(): void {
    this.shareStoryForm = this.formBuilder.group({
      missionId: [null, Validators.compose([Validators.required])],
      title: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required, Validators.maxLength(5000)])],
      url: [''],
      images: this.formBuilder.array([])
    });
    this.onGetMissions();
  }
  get missionId() {
    return this.shareStoryForm.get('missionId') as FormControl;
  }
  get title() {
    return this.shareStoryForm.get('title') as FormControl;
  }
  get date() {
    return this.shareStoryForm.get('date') as FormControl;
  }
  get description() {
    return this.shareStoryForm.get('description') as FormControl;
  }
  get images(): FormArray {
    return this.shareStoryForm.get('images') as FormArray;
  }
  get url() {
    return this.shareStoryForm.get('url') as FormControl;
  }


  createItem(data: any) {
    const newImage = new FormControl(data, Validators.required);
    (<FormArray>this.shareStoryForm.get('images')).push(newImage)
  }
  onImageUpload(event: any) {
    this.imageArray = [];
    let files = event.target.files;
    if (files.length > 10) {
      return this.toast.error({ detail: "ERROR", summary: "Maximum 10 images can be added.", duration: 3000 });
    }
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageArray.push(event.target.result);
          this.createItem(event.target.result);
        }
        reader.readAsDataURL(file);
      }
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

  async onSubmit() {
    this.submitted = true;
    let value = this.shareStoryForm.value;

    if (this.shareStoryForm.valid) {
      this.service.createStory(value).subscribe(
        (response) => {
          this.toast.success({ detail: "SUCCESS", summary: "Story Added!", duration: 1000 });
          setTimeout(() => { this.router.navigate(['/user-home/story-page']); }, 1000);
        },
        (error: any) => {
          this.toast.error({ detail: 'Error', summary: `${error}`, sticky: true, position: 'tr', duration: 1000 })
        });
    }
    else {
      console.log(value);
      this.toast.error({ detail: 'Error', summary: "Please check the form!", sticky: true, position: 'tr', duration: 1000 })
    }
  }
}

