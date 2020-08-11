import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyCourseFormComponent } from './udemy-course-form.component';

describe('UdemyCourseFormComponent', () => {
  let component: UdemyCourseFormComponent;
  let fixture: ComponentFixture<UdemyCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
