import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  environmentName: string;

  constructor() { }

  ngOnInit() {
    this.environmentName = environment.name;
     console.log(`Connecting to API URL: ${environment.apiUrl} | ENVIRONMENT: ${this.environmentName}`);
  }

}
