import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { CustomFiltersModule } from '../../customfilters.module';
import { PrimeNgModule } from '../../primeng.module';

import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherFavAddressListComponent } from './weather-fav-address-list/weather-fav-address-list.component';

@NgModule({
    declarations: [
        WeatherListComponent,
        WeatherFavAddressListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CustomFiltersModule,
        PrimeNgModule
    ],
    exports: []
})
export class WeatherModule { }