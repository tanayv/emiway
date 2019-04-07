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
  @Input() roomType: string = "living";
  @Input() item1 = {};
  @Input() item2 = {};

  activeItemCounter = -1;

  constructor(ref: ElementRef) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    let self = this;
    AFRAME.registerComponent('cursor-next-item', {
      init: function () {
        this.el.addEventListener('click', function (evt) {
          console.log("Next Button pressed");

          if (self.activeItemCounter == 0) {
            let variableFurniture = document.getElementById("variable-furniture-1");
            variableFurniture.setAttribute("src", self.item2["model"]["glb"]);
            variableFurniture.setAttribute("gltf-model", self.item2["model"]["glb"]);
            self.activeItemCounter = 1;
          }

          else {
            let variableFurniture = document.getElementById("variable-furniture-1");
            variableFurniture.setAttribute("src", self.item1["model"]["glb"]);
            variableFurniture.setAttribute("gltf-model", self.item1["model"]["glb"]);
            self.activeItemCounter = 0;
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
          window.location.assign(self.item1["product_page_url"])
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
        console.log("Spawning furniture 1 with URL", self.item1);
        let variableFurniture = document.getElementById("variable-furniture-1");
        variableFurniture.setAttribute("src", self.item1["model"]["glb"]);
        variableFurniture.setAttribute("gltf-model", self.item1["model"]["glb"]);
        self.activeItemCounter = 0;
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
