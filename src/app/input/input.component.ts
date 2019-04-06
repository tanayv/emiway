import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() roomSelected: EventEmitter<String> = new EventEmitter();

  selectRoom(type: Number) {
    let typeOfRoom;
    if (type == 0)
      typeOfRoom = "living";
    else if (type == 1)
      typeOfRoom = "study";
    else if (type == 2)
      typeOfRoom = "bed";
    else
      typeOfRoom = "bed"
    this.roomSelected.emit(typeOfRoom);
  }
  


}