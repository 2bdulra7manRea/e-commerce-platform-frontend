import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCardUserComponent } from './review-card-user.component';

describe('ReviewCardUserComponent', () => {
  let component: ReviewCardUserComponent;
  let fixture: ComponentFixture<ReviewCardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCardUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
