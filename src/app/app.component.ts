import { Component, ElementRef } from '@angular/core';

declare var AFRAME;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emiway';

  aframe: any;
  elem: any;

  constructor(ref: ElementRef) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    let self = this;
    AFRAME.registerComponent('cursor-listener', {
      init: function () {
        this.el.addEventListener('click', function (evt) {
          self.activeMode = 0;
          console.log("CLicked", event);
        });
      },
      /**
       * Handle component removal.
       */
      remove: function () {
        document.getElementsByClassName("visuallyhidden")[0].remove();
      }
    });


  }

  activeMode: Number = 0;
  

  /** Parameters to be sent to GCP Backend */
  roomType: String = "";

  switchToVR() {
    this.activeMode = 1;
  }

  buttonActionFunction() {
    console.log("Helo");
  }



}
