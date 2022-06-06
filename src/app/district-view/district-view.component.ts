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
    this.getDistricts();
  }

  toAdd?: boolean;

  districts?: District[];

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
    this.getDistricts();
  }

  getDistricts(): void {
    console.log(`state id is: ${this.stateId}`);
    this.districts = this.stateDistrictService.getDistricts(this.stateId);
  }

  // show district-add component to add a new district
  addNew(): void {
    this.toAdd = true;
  }

}
