import { Missionskills } from 'src/app/interface/missionskills';
import { User, UserModel } from './../../interface/user';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { AdminService } from 'src/app/service/adminservices.service';
import { Router } from '@angular/router';
import { ActionName, ListBoxComponent, ListBoxToolbarConfig } from '@progress/kendo-angular-listbox';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  UserModel!: any;
  user!: User;
  displayStyle = 'none';
  colorStatus = '';
  rowId!: number;
  skill!: Missionskills[];
  selectedSkill!: string[];

  public data: string[] = ['Anthropology', 'Archeology', 'Astronomy', 'Computer Science', 'Environmental Science', 'History', 'Library Sciences', 'Mathematics', 'Music Theory',
    'Research', 'Administrative Support', 'Customer Service', 'Data Entry', 'Executive Admin', 'Office Management', 'Office Reception', 'Program Management', 'Transactions', 'Agronomy',
    'Animal Care / Handling', 'Animal Therapy', 'Aquarium Maintenance', 'Botany', 'Environmental Education', 'Environmental Policy', 'Farming'];
  public data1: Missionskills[] = [];
  public toolbarSettings: ListBoxToolbarConfig = {
    position: 'right',
    tools: ['transferTo', 'transferFrom'],
  };

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.onGetSkills();
  }

  @ViewChildren(ListBoxComponent)
  private listbox!: QueryList<ListBoxComponent>;

  public OnSubmitSkill(event: ActionName): void {
    let data = [], data1: any[] = [];
    if (this.listbox && this.listbox.length) {
      this.listbox.forEach((item: ListBoxComponent, index: number) => {
        if (index === 0) {
          data = item.data;
        } else {
          data1 = item.data;
        }
      });
      this.selectedSkill = data1;
    }
  }
  showselected() {
    this.selectedSkill;
  }
  SaveSkills() {

  }
  onGetSkills(): void {
    this.service.getMissionSkills().subscribe(
      (response: Missionskills[]) => {
        if (response.length != null) {
          this.skill = response;
        } else {
          console.log(response);
        }
      },
      (error: any) => console.log(error),
      () => console.log('List of skills!')
    );
  }

}
