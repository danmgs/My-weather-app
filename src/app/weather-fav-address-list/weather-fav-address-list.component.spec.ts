import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavAddressListComponent } from './weather-fav-address-list.component';

describe('WeatherFavAddressListComponent', () => {
  let component: WeatherFavAddressListComponent;
  let fixture: ComponentFixture<WeatherFavAddressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFavAddressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFavAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
