import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-district-adder',
  templateUrl: './district-adder.component.html',
  styleUrls: ['./district-adder.component.css']
})
export class DistrictAdderComponent implements OnInit {

  // make editor visible (input box and tick-cross buttons)
  @Input() editor!: boolean | undefined;
  @Output() editorChange = new EventEmitter<boolean>();

  // stateId of the state under which new district is added
  @Input() stateId?: number;

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
  }

  // add district to the state having id of stateId
  // by calling addDistrict method of state-district service
  add(districtName: string) {
    if (this.stateId && districtName.trim()) {
      this.stateDistrictService.addDistrict(this.stateId, districtName);
      this.cancel();
    }
  }

  // hide this component on clicking cancel (cross) button
  cancel(): void {
    this.editor = false;
    this.editorChange.emit(this.editor);
  }
}
