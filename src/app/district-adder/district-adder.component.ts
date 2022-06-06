import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-district-adder',
  templateUrl: './district-adder.component.html',
  styleUrls: ['./district-adder.component.css']
})
export class DistrictAdderComponent implements OnInit {

  @Input() editor!: boolean | undefined;
  @Output() editorChange = new EventEmitter<boolean>();

  @Input() stateId?: number;

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
  }

  // add district to current state
  add(districtName: string) {
    if (this.stateId && districtName.trim()) {
      console.log(`Added ${districtName}`);
      this.stateDistrictService.addDistrict(this.stateId, districtName);
      this.cancel();
    } else {
      console.log(`Selected stateId: ${this.stateId}`);
    }
  }

  // hide the input box
  cancel(): void {
    this.editor = false;
    this.editorChange.emit(this.editor);
  }
}
