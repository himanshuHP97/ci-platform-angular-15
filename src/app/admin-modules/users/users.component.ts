import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../../interface/user';
import { AdminService } from './../../service/adminservices.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  rowId!: number;
  displayStyle = 'none';
  colorStatus = '';
  subscriber!: Subscription;

  constructor(private userService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  showModal(id: any) {
    this.displayStyle = 'block';
    this.rowId = id;
  }
  hideModal() {
    this.displayStyle = 'none';
  }

  onGetUsers(): void {
    this.subscriber = this.userService.getUsers().subscribe(
      (response: User[]) => {
        if (response.length != null) {
          this.users = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('User found!')
    );
  }

  onDeletePage(id: number) {
    this.subscriber = this.userService.deleteUser(id).subscribe(
      (response: User) => {
        if (response.id != 0) {
          window.alert('User deleted!');
          this.displayStyle = 'none';
          window.location.reload();
        } else {
          window.alert('An error occurred!');
        }
      },
      (error: any) => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe;
  }
}
