import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesKComponent } from './categories-k.component';

describe('CategoriesKComponent', () => {
  let component: CategoriesKComponent;
  let fixture: ComponentFixture<CategoriesKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
