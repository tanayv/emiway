import { Component, ElementRef } from '@angular/core';
import { SuggestionsService } from "./suggestions.service";
import WayfairData from "./wayfair.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SuggestionsService]
})
export class AppComponent {
  title = 'emiway';

  aframe: any;
  elem: any;

  constructor(private suggestionsService: SuggestionsService) {
  }

  ngOnInit() {
  }

  activeMode: Number = 0;
  

  /** Parameters to be sent to GCP Backend */
  roomType: String = "";
  color: String = "#CEB180";
  material: String = "emissive:#d2ca9f;side:double";


  /** Furniture Recommendations */
  firstItem = {}
  secondItem = {}

  generateRoom(event) {
    let payload = JSON.parse(event);
    this.color = payload.color;
    this.roomType = payload.roomType;
    

    let items = this.suggestionsService.fetchRecommendations([0, 0, 0, 255, 255, 0]);
    this.firstItem = WayfairData[items[0]];
    this.secondItem = WayfairData[items[1]];

    console.log("First Item", this.firstItem);

    this.activeMode = 1;

  }



}
