import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
headerDate!: number;

constructor(private router:Router){}

  ngOnInit(): void {
    this.headerDate = Date.now();
  }
  onLogout() {
      this.router.navigate(['/ci-platform']);
  }
}
