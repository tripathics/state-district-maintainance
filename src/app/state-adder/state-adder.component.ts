import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../place';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-state-adder',
  templateUrl: './state-adder.component.html',
  styleUrls: ['./state-adder.component.css']
})
export class StateAdderComponent implements OnInit {

  // make editor (input box) visible,
  // is true when toAdd property of state-view component is true
  @Input() editor!: boolean | undefined;
  @Output() editorChange = new EventEmitter<boolean>();

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
  }

  // hide this component on clicking cancel (cross) button
  cancel(): void {
    this.editor = false;
    this.editorChange.emit(this.editor);
  }

  // add state provided its name 
  // by calling addState method of state-district service
  add(state: string) {
    if (state.trim()) {
      this.stateDistrictService.addState(state);
      this.cancel();
    }
  }
}
