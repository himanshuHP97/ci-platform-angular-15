import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCmsPageComponent } from './edit-cms-page.component';

describe('EditCmsPageComponent', () => {
  let component: EditCmsPageComponent;
  let fixture: ComponentFixture<EditCmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCmsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
