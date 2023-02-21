import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mission:any[]=[];
  displayMode:number = 1;

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
