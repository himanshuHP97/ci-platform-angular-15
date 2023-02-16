import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searchList: BehaviorSubject<any> = new BehaviorSubject<any>('');

  ngOnInit(): void {

  }
  OnSerach(value:string) {
    this.searchList.next(value);
  }
  OnEventChange(e:any){
    this.searchList.next(e.target.value);
  }
}
