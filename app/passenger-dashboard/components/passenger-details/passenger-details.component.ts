import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/Passenger";

@Component({
    selector: 'passenger-details',
    templateUrl: 'passenger-details.component.html',
    styleUrls: ['passenger-details.component.scss']
})
export class PassengerDetailsComponent {
    @Input()
    details: Passenger;
}