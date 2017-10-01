import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { GeoService } from './geo.service';
import { GeoData } from '../Shared/GeoData';
import { WeatherData } from '../Shared/WeatherData';

@Injectable()
export class WeatherService {

  geodata: GeoData;

  weatherChanged = new Subject<WeatherData>();
  weatherFavChanged = new Subject();
  dummyUsersChanged = new Subject();

  constructor(private http: Http, private geoService: GeoService, private jsonp: Jsonp) { }

  getWeather(address: String) {
    this.geoService.getGeoCode(address)
      .subscribe(
      (geodata: GeoData) => {
        return this.getWeatherInfos(geodata)
          .subscribe(
          (weatherdata: WeatherData) => {
            this.weatherChanged.next(weatherdata);
          },
          (error) => console.log(error)
          );
      },
      (error) => console.log(error)
      );
  }

  getWeatherInfos(geodata: GeoData) {

    const url = `http://localhost:3000/api/getWeather/${geodata.lat}/${geodata.lng}`;
    console.log(`Calling getWeatherInfos with ${url}`);
    return this.http.post(url, {}/*, options */)
      .map(
      (response: Response) => {
        const res = response.json();
        console.log('getWeatherInfos' + JSON.stringify(res, undefined, 2));
        return new WeatherData(geodata, res.body.currently.temperature);
      }
      );
  }

  // getWeatherFavAddresses()
  // {
  //   const url = `http://localhost:3000/api/weatherFavAddress`;
  //   console.log(`Calling getWeatherFavAddresses with ${url}`);
  //   return this.http.get(url)
  //     .subscribe(
  //       (response: Response) => {
  //         // WeatherFav
  //         console.log(response.json());
  //         this.weatherFavChanged.next(response.json());
  //       },
  //       (error) => console.log(error)
  //     );
  // }

  getWeatherFavAddresses() {
    const url = `http://localhost:3000/api/weatherFavAddress`;
    console.log(`Calling getWeatherFavAddresses with ${url}`);
    return this.http.get(url)
      .subscribe(
      (response: Response) => {
        // WeatherFav
        console.log(response.json());
        this.weatherFavChanged.next(response.json());
      },
      (error) => console.log(error)
      );
  }

  getDummyUsers() {
    const url = `http://localhost:3000/api/users`;
    console.log(`Calling getDummyUsers with ${url}`);

    // let params = new URLSearchParams();
    // // params.set('format', 'json');
    // params.set('callback', '__ng_jsonp__.__req0.finished');

    // return this.jsonp.request(url, { search: params })
    return this.http.get(url)
      .subscribe(
      (response: Response) => {
        this.dummyUsersChanged.next(response.json());
      },
      (error) => console.log(error)
      );
  }

}
