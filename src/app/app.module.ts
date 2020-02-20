import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeypointsSelectorComponent } from './components/keypoints-selector/keypoints-selector.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import { InstructiesComponent } from './components/instructies/instructies.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {KeypointService} from "./models/keypoint.service";
import { EngelsPipe } from './models/engels.pipe';
import {HttpService} from "./models/http.service";


@NgModule({
  declarations: [
    AppComponent,
    KeypointsSelectorComponent,
      NavbarComponent,
      InstructiesComponent,
      EngelsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [KeypointService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
