import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Story } from 'src/app/interface/story';
import { AdminService } from 'src/app/service/adminservices.service';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent {
  star: number = 5;
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
  id!: string | null;
  story!: Story;


  constructor(private service: AdminService,
    private router: Router,
    public route: ActivatedRoute,
    private toastr: NgToastService) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != '' && this.id != null) {
      this.onGetStory(parseInt(this.id));
    }
  }


  onGetStory(id: number): void {
    this.service.getStory(id).subscribe({
      next: response => {
        this.story = response
      },
      error: error => console.log(error),
      complete: () => console.log(`Story found for ${id}`)
    });
  }
}
