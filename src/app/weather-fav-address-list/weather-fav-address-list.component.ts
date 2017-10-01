import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { WeatherService } from '../services/weather.service';

import { WeatherData } from '../Shared/WeatherData';

@Component({
  selector: 'app-weather-fav-address-list',
  templateUrl: './weather-fav-address-list.component.html',
  styleUrls: ['./weather-fav-address-list.component.css']
})
export class WeatherFavAddressListComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  results: String;
  private subscription: Subscription;

  ngOnInit() {
    this.getWeatherFavAddresses();
    
    this.subscription = this.weatherService.weatherChanged
    .subscribe(
      (res: any) => {
        this.results = res;
      }
    );
  }

  getWeatherFavAddresses() {
    return this.weatherService.getWeatherFavAddresses();
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
