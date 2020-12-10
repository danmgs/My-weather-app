import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

import { ServerHealthData } from '../Shared/ServerHealthData';

@Injectable()
export class ServerHealthService {

  constructor(private http: Http) { }

  check() {

    const url = `${environment.apiUrl}/api/serverhealth`;
    return this.http.get(url)
      .map(
        (response: Response) => {
          const res = response.json();
          return new ServerHealthData(
            res.status,
            res.text);
        }
      );
  }

}
