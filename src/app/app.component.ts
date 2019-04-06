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
    
    
  }

  



}
