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
}