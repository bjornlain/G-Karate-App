import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeypointsSelectorComponent} from "./components/keypoints-selector/keypoints-selector.component";
import {InstructiesComponent} from "./components/instructies/instructies.component";


const appRoutes: Routes = [{
  path: 'keypointSelector',
  component: KeypointsSelectorComponent
}, {
  path: 'instructies',
    component: InstructiesComponent
}, {
  path: '',
  redirectTo: '/keypointSelector',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
