import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherListComponent } from './views/weather/weather-list/weather-list.component';
import { WeatherFavAddressListComponent } from './views/weather/weather-fav-address-list/weather-fav-address-list.component';
import { QuoteListComponent } from './views/quote-list/quote-list.component';
import { NewsSourcesListComponent } from './views/news/news-sources-list/news-sources-list.component';
import { NewsArticlesListComponent } from './views/news/news-articles-list/news-articles-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
  { path: 'weather-list', component: WeatherListComponent },
  { path: 'weather-fav-address-list', component: WeatherFavAddressListComponent },
  { path: 'quote-list', component: QuoteListComponent },
  { path: 'news-sources-list', component: NewsSourcesListComponent },
  { path: 'news-articles-list', component: NewsArticlesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
