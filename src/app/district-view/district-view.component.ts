import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { District } from '../place';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-district-view',
  templateUrl: './district-view.component.html',
  styleUrls: ['./district-view.component.css']
})
export class DistrictViewComponent implements OnInit, OnChanges {

  @Input() stateId!: number;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["stateId"]) {
      this.getDistricts();
    }
  }

  // true when a district is to be added (when Add-New button is clicked)
  toAdd?: boolean;

  // Contains the districts under the state with id of stateId 
  districts?: District[];

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
    this.getDistricts();
  }

  // get districts under the the state with id of stateId from state-district service
  // and assign it to the districts property of this component
  getDistricts(): void {
    this.districts = this.stateDistrictService.getDistricts(this.stateId);
  }

  // show district-add component to add a new district
  addNew(): void {
    this.toAdd = true;
  }

}
