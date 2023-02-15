import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryShareComponent } from './story-share.component';

describe('StoryShareComponent', () => {
  let component: StoryShareComponent;
  let fixture: ComponentFixture<StoryShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
