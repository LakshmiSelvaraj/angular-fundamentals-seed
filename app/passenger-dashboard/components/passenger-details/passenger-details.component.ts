import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/Passenger";

@Component({
    selector: 'passenger-details',
    templateUrl: 'passenger-details.component.html',
    styleUrls: ['passenger-details.component.scss']
})
export class PassengerDetailsComponent {
    @Input()
    details: Passenger;
    editing: boolean = false;
    @Output()
    editPassenger: EventEmitter<any> = new EventEmitter();
    @Output()
    removePassenger: EventEmitter<any> = new EventEmitter();

    onNameChange(changedName: string):void {
        this.details.name = changedName;
    }

    toggleEdit(): void {
        if(this.editing) {
            this.editPassenger.emit(this.details);
        }
        this.editing = !this.editing;
    }

    remove(): void {
        this.removePassenger.emit(this.details);
    }
}