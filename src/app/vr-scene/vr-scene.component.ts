import { Component, ElementRef, Input } from '@angular/core';

declare var AFRAME;

@Component({
  selector: 'app-vr-scene',
  templateUrl: './vr-scene.component.html',
  styleUrls: ['./vr-scene.component.css']
})
export class VRSceneComponent {
  title = 'emiway';

  aframe: any;
  elem: any;

  @Input() wallColorHex: string = "#000";
  @Input() room: string = "fallback";
  @Input() recs: Array<any> = [];

  activeItemCounter = -1;

  constructor(ref: ElementRef) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    let self = this;
    AFRAME.registerComponent('cursor-next-item', {
      init: function () {
        this.el.addEventListener('click', function (evt) {
          
          console.log("Next: ", {
            "currentCounter": self.activeItemCounter,
            "item": self.recs[self.activeItemCounter]
          })

          if (self.activeItemCounter == self.recs.length - 1) {
            self.activeItemCounter = 0;
          }

          else {
            self.activeItemCounter++;
            let variableFurniture = document.getElementById("variable-furniture-1");
            variableFurniture.setAttribute("src", self.recs[self.activeItemCounter]["model"]["glb"]);
            variableFurniture.setAttribute("gltf-model", self.recs[self.activeItemCounter]["model"]["glb"]);
          }

        });
      },
      /**
       * Handle component removal.
       */
      remove: function () {
        document.getElementsByClassName("visuallyhidden")[0].remove();
      }
    });

    AFRAME.registerComponent('cursor-purchase', {
      init: function () {
        this.el.addEventListener('click', function (evt) {
          window.location.assign(self.recs[self.activeItemCounter]["product_page_url"])
        });
      },
      /**
       * Handle component removal.
       */
      remove: function () {
        document.getElementsByClassName("visuallyhidden")[0].remove();
      }
    });

    AFRAME.registerComponent('walls', {
      init: function () {

        console.log("Initializing walls with color", self.wallColorHex);

        let wall1 = document.getElementById('far-wall-1');
        wall1.setAttribute('color', self.wallColorHex);
        wall1.setAttribute('material', "emissive:" + self.wallColorHex + ";side:double");

        let wall2 = document.getElementById('far-wall-2');
        wall2.setAttribute('color', self.wallColorHex);
        wall2.setAttribute('material', "emissive:" + self.wallColorHex + ";side:double");

        /** Spawn Variable Furniture Part 1 */
        self.activeItemCounter = 0;
        let variableFurniture = document.getElementById("variable-furniture-1");
        variableFurniture.setAttribute("src", self.recs[self.activeItemCounter]["model"]["glb"]);
        variableFurniture.setAttribute("gltf-model", self.recs[self.activeItemCounter]["model"]["glb"]);
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
  


}
