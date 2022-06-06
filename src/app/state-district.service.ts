import { Injectable } from '@angular/core';
import { District, State } from './place';

@Injectable({
  providedIn: 'root'
})
export class StateDistrictService {

  STATES: State[] = [];

  constructor() { }

  getStates(): State[] {
    return this.STATES;
  }

  addState(stateName: string): void {
    let newState: State = {
      id: this.STATES.length + 1,
      name: stateName.trim(),
      districts: []
    };

    this.STATES.push(newState);
  }

  getDistricts(stateId: number): District[] {
    console.log(stateId)
    console.log(this.STATES[stateId - 1].districts)
    return this.STATES[stateId - 1].districts;
  }

  addDistrict(stateId: number, districtName: string): void {
    let newDistrict: District = {
      id: this.STATES[stateId-1].districts.length + 1,
      name: districtName.trim()
    };

    this.STATES[stateId-1].districts.push(newDistrict);
  }
}
