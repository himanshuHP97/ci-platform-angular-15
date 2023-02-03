import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSkillsComponent } from './mission-skills.component';

describe('MissionSkillsComponent', () => {
  let component: MissionSkillsComponent;
  let fixture: ComponentFixture<MissionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
