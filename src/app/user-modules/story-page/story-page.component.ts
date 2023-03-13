import { AdminService } from 'src/app/service/adminservices.service';
import { Story } from './../../interface/story';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {
  stories: Story[]=[];
  page: number = 1;
  constructor(private service: AdminService,private sanitizer:DomSanitizer) { }
  count!: number;
  ngOnInit(): void {
    this.onGetStories();
  }

  onGetStories(): void {
    this.service.getStories().subscribe(
      (response: Story[]) => {
        if (response.length != null) {
          this.stories = response;
          this.stories = this.stories.map(x => {
            return {
              id: x.id,
              missionId: x.missionId,
              userId: x.userId,
              userFullName: x.userFullName,
              images:  x.images,
              title: x.title,
              date: x.date,
              description: (x.description).replace(/<[^>]*>/g, ''),
              videoUrl: x.videoUrl,
              missionTitle:x.missionTitle,
              status:x.status,
              isActive:x.isActive
            }
            this.count = response.length;
          });
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('Found Stroies!')
    );
  }
}
