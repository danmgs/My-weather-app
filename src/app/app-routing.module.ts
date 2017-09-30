import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherListComponent } from './weather-list/weather-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/weather-list', pathMatch: 'full' },
  { path: 'weather-list', component: WeatherListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
