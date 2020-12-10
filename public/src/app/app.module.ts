import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Modules by feature **/
import { HeaderModule } from './views/header/header.module';
import { WeatherModule } from './views/weather/weather.module';
import { NewsModule } from './views/news/news.module';
import { QuoteModule } from './views/quote-list/quote.module';
import { PrimeNgModule } from './primeng.module';
import { CustomFiltersModule } from './customfilters.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './views/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
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
    HeaderModule,
    WeatherModule,
    NewsModule,
    QuoteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
