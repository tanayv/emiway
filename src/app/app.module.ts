import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { VrSceneComponent } from './vr-scene/vr-scene.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    VrSceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
