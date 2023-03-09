import { AdminService } from 'src/app/service/adminservices.service';
import { Story } from './../../interface/story';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {
    stories: Story[] = [];
    page: number = 1;
    constructor(private service: AdminService) { }
    count!:number;

    ngOnInit(): void {
      this.onGetStories();
    }

    onGetStories(): void {
      this.service.getStories().subscribe(
        (response: Story[]) => {
          if (response.length != null) {
            this.stories = response;
            this.count = response.length;
          } else {
            console.log(response);
          }
        },
        (error: any) => console.log(error),
        () => console.log('Found Stroies!')
      );
    }
  }
