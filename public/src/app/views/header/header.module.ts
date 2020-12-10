import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';

import { ServerHealthService } from '../../services/serverhealth.service';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [HeaderComponent],
    providers: [ServerHealthService]
})
export class HeaderModule {}
