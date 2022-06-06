import { Component, Input, OnInit, Output } from '@angular/core';
import { State } from '../place';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

  @Output() states: State[] = [];
  @Output() selectedStateId?: number;    // to transfer selectedStateId to district view

  toAdd?: boolean;

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates(): void {
    this.states = this.stateDistrictService.getStates();
  }

  addNew(): void {
    this.toAdd = true;
  }

}
