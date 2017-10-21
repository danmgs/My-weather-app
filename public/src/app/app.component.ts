import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WELCOME !';

  loadedFeature = 'weather-list';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
