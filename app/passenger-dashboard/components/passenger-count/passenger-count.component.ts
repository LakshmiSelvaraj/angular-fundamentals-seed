import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/Passenger";

@Component({
    selector: 'passenger-count',
    templateUrl: 'passenger-count.component.html'
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    getCheckedInCount():number {
        return this.items.filter(passenger => passenger.checkedIn).length;
    }
}