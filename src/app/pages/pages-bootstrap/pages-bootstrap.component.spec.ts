import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBootstrapComponent } from './pages-bootstrap.component';

describe('PagesBootstrapComponent', () => {
  let component: PagesBootstrapComponent;
  let fixture: ComponentFixture<PagesBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
