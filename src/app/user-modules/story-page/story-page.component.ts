import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {
  stories: [] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
