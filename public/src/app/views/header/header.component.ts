import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { ServerHealthService } from '../../services/serverhealth.service';
import { ServerHealthData } from '../../Shared/ServerHealthData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  environmentName: String;
  checkApiHealthResponse: ServerHealthData;

  constructor(private serverHealthService: ServerHealthService) { }

  ngOnInit() {
    this.environmentName = environment.name;
    console.log(`Connecting to API URL: ${environment.apiUrl} | ENVIRONMENT: ${this.environmentName}`);
    this.checkApiStatus();
  }

  checkApiStatus() {
    this.serverHealthService.check()
      .subscribe((data: ServerHealthData) => {
        console.log(data);
        this.checkApiHealthResponse = data;
      }, () => this.checkApiHealthResponse = new ServerHealthData("KO", "server is down"));
  }
}
