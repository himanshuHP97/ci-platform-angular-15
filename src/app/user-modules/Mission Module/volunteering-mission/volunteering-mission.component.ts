import { Component } from '@angular/core';

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
  slides = [
    {image: '../../../../assets/images/image1.png'},
    {image: '../../../../assets/images/image1.png'},
    {image: '../../../../assets/images/image1.png'},
    {image: '../../../../assets/images/image1.png'},
    {image: '../../../../assets/images/image1.png'},
  ];
}
