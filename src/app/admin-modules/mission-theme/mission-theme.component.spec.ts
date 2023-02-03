import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionThemeComponent } from './mission-theme.component';

describe('MissionThemeComponent', () => {
  let component: MissionThemeComponent;
  let fixture: ComponentFixture<MissionThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
