import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { GeoData } from '../Shared/GeoData';

import { environment } from '../../environments/environment';

@Injectable()
export class GeoService {

  constructor(private http: Http) { }

  getGeoCode(address: String) {

    const url = `http://${environment.apiUrl}:${environment.apiPort}/api/geo?address=${address}`;
    // console.log('getGeoCode', url);
    return this.http.get(url)
      .map(
      (response: Response) => {
        const res = response.json();
        return new GeoData(
          res.geometry.location.lat,
          res.geometry.location.lng,
          res.formatted_address);
      }
      );
  }

}
