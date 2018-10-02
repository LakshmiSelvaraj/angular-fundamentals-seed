import { Child } from './Child';

export interface Passenger {
    id: number,
    name: string,
    checkedIn: boolean,
    checkedInDate: number | null,
    children: Child[] | null
  }