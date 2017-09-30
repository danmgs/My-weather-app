import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import {GeoData} from '../Shared/GeoData';

@Injectable()
export class GeoService {

  constructor(private http: Http) { }

  getGeoCode(address: String) {

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
    console.log(`Calling getGeoCode with ${url}`);
    return this.http.get(url)
      .map(
        (response: Response) => {
          const body = response.json();
          //console.log(body.results[0].geometry.location);
          return new GeoData(
            body.results[0].geometry.location.lat,
            body.results[0].geometry.location.lng,
            body.results[0].formatted_address);
        }
      );
  }

}
