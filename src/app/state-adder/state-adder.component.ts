import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../place';
import { StateDistrictService } from '../state-district.service';

@Component({
  selector: 'app-state-adder',
  templateUrl: './state-adder.component.html',
  styleUrls: ['./state-adder.component.css']
})
export class StateAdderComponent implements OnInit {

  @Input() editor!: boolean | undefined;
  @Output() editorChange = new EventEmitter<boolean>();

  @Output() newState?: State;

  constructor(private stateDistrictService: StateDistrictService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.editor = false;
    this.editorChange.emit(this.editor);
  }

  add(state: string) {
    if (state.trim()) {
      console.log(`Added ${state}`);
      this.stateDistrictService.addState(state);
      this.cancel();
    }
  }
}
