import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPagesComponent } from './cms-pages.component';

describe('CmsPagesComponent', () => {
  let component: CmsPagesComponent;
  let fixture: ComponentFixture<CmsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
