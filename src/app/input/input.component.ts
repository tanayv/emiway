import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  activeRoomIndex = 0;
  @Output() roomGenerated: EventEmitter<String> = new EventEmitter();
  roomTypeList: Array<String> = ["living room", "study room", "bedroom"];
  
  selectRoom(type: number) {
    this.activeRoomIndex = type;
  }

  activeColorIndex = 0;
  colorList: Array<{name: String, hex: String, dark: Boolean}> = [
      {name: "Blue", hex: "#1976D2", dark: true},
      {name: "Purple", hex: "#4527A0", dark: true},
      {name: "Green", hex: "#43A047", dark: true},
      {name: "Amber", hex: "#FFECB3", dark: true},
      {name: "Teal", hex: "#00897B", dark: true},
      {name: "Orange", hex: "#E64A19", dark: true}
  ]

  selectColor(index: number) {
    this.activeColorIndex = index;
  }

  generateRoom() {
    this.roomGenerated.emit(JSON.stringify({
      roomType: this.roomTypeList[this.activeRoomIndex],
      color: this.colorList[this.activeColorIndex].hex
    }));
  }


  


}