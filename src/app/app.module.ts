import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { VRSceneComponent } from './vr-scene/vr-scene.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    VRSceneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
