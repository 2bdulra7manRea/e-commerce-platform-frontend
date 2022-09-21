import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReivewsProductComponent } from './reivews-product.component';

describe('ReivewsProductComponent', () => {
  let component: ReivewsProductComponent;
  let fixture: ComponentFixture<ReivewsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReivewsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReivewsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
