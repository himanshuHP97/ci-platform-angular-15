import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.scss']
})
export class VolunteerPageComponent {
  displayStyle = 'none';
  colorStatus = '';


  showModal() {
    this.displayStyle = 'block';
  }
  hideModal() {
    this.displayStyle = 'none';
  }
}
