import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherFavAddressListComponent } from './weather-fav-address-list/weather-fav-address-list.component';
import { QuoteListComponent } from './quote-list/quote-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
  { path: 'weather-list', component: WeatherListComponent },
  { path: 'weather-fav-address-list', component: WeatherFavAddressListComponent },
  { path: 'quote-list', component: QuoteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
