import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {

  @Output() colorSelected: EventEmitter<String> = new EventEmitter();


  colorList: Array<{name: String, hex: String, dark: Boolean}> = [
      {name: "Blue", hex: "#1976D2", dark: true},
      {name: "Purple", hex: "#4527A0", dark: true},
      {name: "Green", hex: "#43A047", dark: true},
      {name: "Amber", hex: "#FFECB3", dark: true},
      {name: "Teal", hex: "#00897B", dark: true},
      {name: "Orange", hex: "#E64A19", dark: true}
  ]

  selectColor(index: Number) {
    this.colorSelected.emit(JSON.stringify(this.colorList[parseInt(index.toString())]));
  }
}