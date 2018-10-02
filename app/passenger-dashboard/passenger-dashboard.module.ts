import { NgModule } from "@angular/core";

import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailsComponent } from "./components/passenger-details/passenger-details.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailsComponent
    ],

    exports: [
        PassengerDashboardComponent
    ]
})
export class PassengerDashboardModule {
}