import { Component, ElementRef } from '@angular/core';
import { SuggestionsService } from "./suggestions.service";
import WayfairData from "./wayfair.data";
import { AnonymousSubject } from 'rxjs/internal/Subject';

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
  furniture: Array<any> = [];

  generateRoom(event) {
    let payload = JSON.parse(event);
    this.color = payload.color;
    this.roomType = payload.roomType;
    
    //BED LIVING STUDY R G B//

    let bed = 0;
    let living = 0; 
    let study = 0;

    if (this.roomType === "living room")
      living = 1;

    else if (this.roomType === "study room")
      study = 1;
    
    else
      bed = 1;


    let red;
    let green;
    let blue;




    this.suggestionsService.fetchRecommendations([bed, living, study, 255, 0, 0]).subscribe((response: {"ans": Array<number>}) => {
      console.log("Response from bishk", response.ans);
      this.furniture = response.ans.map((index) => (
        WayfairData[index]
      ));
      console.log("Finalized furniture", this.furniture);
      this.activeMode = 1;
    });
    

    

  }



}
