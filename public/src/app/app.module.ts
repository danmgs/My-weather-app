import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { WeatherListComponent } from './views/weather/weather-list/weather-list.component';
import { WeatherFavAddressListComponent } from './views/weather/weather-fav-address-list/weather-fav-address-list.component';
import { QuoteListComponent } from './views/quote-list/quote-list.component';
import { NewsSourcesListComponent } from './views/news/news-sources-list/news-sources-list.component';
import { NewsArticlesListComponent } from './views/news/news-articles-list/news-articles-list.component';

import { ExponentialStrengthPipe } from './filters/exponential-strength-pipe';
import { ConvertToDegrePipe } from './filters/convert-degre-pipe';
import { TruncatePipe } from './filters/truncate-pipe';

import { WeatherService } from './services/weather.service';
import { GeoService } from './services/geo.service';
import { QuoteService } from './services/quote.service';
import { NewsService } from './services/news.service';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule, CheckboxModule, ChartModule, GrowlModule, CalendarModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WeatherListComponent,
    WeatherFavAddressListComponent,
    QuoteListComponent,
    NewsSourcesListComponent,
    NewsArticlesListComponent,
    ExponentialStrengthPipe,
    ConvertToDegrePipe,
    TruncatePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    ChartModule,
    GrowlModule,
    CalendarModule
  ],
  providers: [WeatherService, GeoService, QuoteService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
