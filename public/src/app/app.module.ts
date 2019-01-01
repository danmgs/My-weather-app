import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Modules by feature **/
import { WeatherModule } from './views/weather/weather.module';
import { NewsModule } from './views/news/news.module';
import { QuoteModule } from './views/quote-list/quote.module';
import { PrimeNgModule } from './primeng.module';
import { CustomFiltersModule } from './customfilters.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';

/** Services **/
import { WeatherService } from './services/weather.service';
import { GeoService } from './services/geo.service';
import { QuoteService } from './services/quote.service';
import { NewsService } from './services/news.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomFiltersModule,
    PrimeNgModule,
    WeatherModule,
    NewsModule,
    QuoteModule
  ],
  providers: [WeatherService, GeoService, QuoteService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
