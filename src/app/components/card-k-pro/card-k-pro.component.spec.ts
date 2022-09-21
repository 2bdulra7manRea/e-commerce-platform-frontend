import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKProComponent } from './card-k-pro.component';

describe('CardKProComponent', () => {
  let component: CardKProComponent;
  let fixture: ComponentFixture<CardKProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardKProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardKProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
