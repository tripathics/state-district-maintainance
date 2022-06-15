import { Component, Input, OnInit, Output } from '@angular/core';
import { State } from '../place';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

  // list of states provided by state-district service
  states: State[] = [];
  @Output() selectedStateId?: number;    // sends selectedStateId to district view

  toAdd?: boolean;    // this is true for state-adder to be visible

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
    this.getStates();
  }

  // populate states property by calling the getStates() method
  // of state-district service
  getStates(): void {
    this.states = this.stateDistrictService.getStates();
  }

  // make state-adder component visible by setting toAdd to true
  addNew(): void {
    this.toAdd = true;
  }

}
