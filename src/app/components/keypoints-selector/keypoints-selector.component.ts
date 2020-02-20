import { Component, OnInit } from '@angular/core';
import {Keypoint} from "../../models/keypoint";
import {KeypointService} from "../../models/keypoint.service";


@Component({
  selector: 'app-keypoints-selector',
  templateUrl: './keypoints-selector.component.html',
  styleUrls: ['./keypoints-selector.component.css']
})
export class KeypointsSelectorComponent implements OnInit {
  myKeypoint: Keypoint = new Keypoint(false, false, false, false);
  rArm: string = "rArm";
  lArm: string = "lArm";
  lBeen: string = "legBlack";
  rBeen: string = "legBlack";
  constructor(private keypointService: KeypointService) {}

  ngOnInit() {
  }
  clickRHand() {
    if (this.myKeypoint.rechterhand === false){
      this.rArm = "rArmDisabled";
      this.myKeypoint.rechterhand = true;
    } else {
      this.rArm = "rArm";
      this.myKeypoint.rechterhand = false;
    }
    this.keypointService.setKeypoint(this.myKeypoint);
  }
  clickLHand() {
    if (this.myKeypoint.linkerhand === false){
      this.lArm = "lArmDisabled";
      this.myKeypoint.linkerhand = true;
    } else {
      this.lArm = "lArm";
      this.myKeypoint.linkerhand = false;
    }
    this.keypointService.setKeypoint(this.myKeypoint);
  }
  clickLBeen() {
    if (this.myKeypoint.linkerbeen === false){
      this.lBeen = "leg";
      this.myKeypoint.linkerbeen = true;
    } else {
      this.lBeen = "legBlack";
      this.myKeypoint.linkerbeen = false;
    }
    this.keypointService.setKeypoint(this.myKeypoint);
  }
  clickRBeen() {
    if (this.myKeypoint.rechterbeen === false){
      this.rBeen = "leg";
      this.myKeypoint.rechterbeen = true;
    } else {
      this.rBeen = "legBlack";
      this.myKeypoint.rechterbeen = false;
    }
    this.keypointService.setKeypoint(this.myKeypoint);
  }
}
