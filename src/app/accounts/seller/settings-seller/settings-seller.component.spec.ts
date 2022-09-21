import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSellerComponent } from './settings-seller.component';

describe('SettingsSellerComponent', () => {
  let component: SettingsSellerComponent;
  let fixture: ComponentFixture<SettingsSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
