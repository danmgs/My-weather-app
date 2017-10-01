import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
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

  constructor(private http: Http, private geoService: GeoService) { }

  getWeather(address: String) {
    const encodedAddress = encodeURIComponent(address.toString());
    this.geoService.getGeoCode(encodedAddress)
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

    // let headers = new Headers();
    //     // headers.append('Content-Type','application/json');
    //     // headers.append('Accept', 'application/json');
    //     // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    //     headers.append('Access-Control-Allow-Origin', '*');
    //     // headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    //     let options = new RequestOptions({ headers: headers });

    const url = `https://api.darksky.net/forecast/3ef106162ed142fc3dc78e058263e0e8/${geodata.lat}\,${geodata.lng}`;
    console.log(`Calling getWeatherInfos with ${url}`);
    return this.http.get(url/*, options */)
      .map(
        (response: Response) => {
          const body = response.json();
          // console.log('getWeatherInfos' + JSON.stringify(body, undefined, 2));
          return new WeatherData(geodata, body.currently.temperature);
        }
      );
  }

  getWeatherFavAddresses()
  {
    const url = `http://localhost:3000/api/users`;
    console.log(`Calling getWeatherFavAddresses with ${url}`);
    return this.http.get(url/*, options */)
      .subscribe(
        (response: Response) => {
          this.weatherFavChanged.next(response.json());
        },
        (error) => console.log(error)
      );
  }

}
