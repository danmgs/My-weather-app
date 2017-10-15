import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { HeaderComponent } from './header/header.component';
import { WeatherFavAddressListComponent } from './weather-fav-address-list/weather-fav-address-list.component';

import { ExponentialStrengthPipe } from './filters/exponential-strength-pipe';
import { ConvertToDegrePipe } from './filters/convert-degre-pipe';

import { WeatherService } from './services/weather.service';
import { GeoService } from './services/geo.service';
import { AppRoutingModule } from './app-routing.module';

import {ButtonModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    HeaderComponent,
    WeatherFavAddressListComponent, 
    ExponentialStrengthPipe,
    ConvertToDegrePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [WeatherService, GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
