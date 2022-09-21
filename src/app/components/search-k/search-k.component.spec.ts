import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchKComponent } from './search-k.component';

describe('SearchKComponent', () => {
  let component: SearchKComponent;
  let fixture: ComponentFixture<SearchKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
