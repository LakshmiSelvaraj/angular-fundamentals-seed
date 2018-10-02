import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  name: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  passengers: Passenger[];
  constructor() {
    this.passengers = [
      {
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
        name: 'Myna',
        checkedIn: false,
        checkedInDate: null,
        children:null
      }
    ]
  }

}
