import { Component } from "@angular/core";

import { Passenger } from '../models/Passenger';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: 'passenger-dashboard.component.html',
    styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent {
    passengers: Passenger[];
    constructor() {
      this.passengers = [
        {
          id: 0,
          name: 'Lakshmi Selvaraj',
          checkedIn: true,
          checkedInDate: 1538447072588,
          children: [
            {
              name: 'Nila',
              age: 1
            }
          ]
        },
        {
          id: 1,
          name: 'Myna',
          checkedIn: false,
          checkedInDate: null,
          children:null
        }
      ]
    }

    handleEdit(editedPassenger: Passenger): void {
      console.log("Passenger edited in parent component");
      this.passengers = this.passengers.map(passenger => {
        if(passenger.id === editedPassenger.id) {
          passenger = Object.assign({}, passenger, editedPassenger);
        }
        return passenger;
      });
    }

    handleRemove(removedPassenger: Passenger): void {
      this.passengers = this.passengers.filter(passenger => passenger.id != removedPassenger.id);
    }
}