import { Component, OnInit } from '@angular/core';
import {KeypointService} from "../../models/keypoint.service";
import {Keypoint} from "../../models/keypoint";
import {HttpService} from "../../models/http.service";
import {Sequence} from "../../models/sequence";
import {Observable} from "rxjs";

@Component({
  selector: 'app-instructies',
  templateUrl: './instructies.component.html',
  styleUrls: ['./instructies.component.css']
})
export class InstructiesComponent implements OnInit {
  keypoint: Keypoint;
  sequences: Observable<Sequence[]>;
  seq: string = "RH 1 2 3 4 5 6 7 8";
  keypoint1: boolean = true;
  keypoint2: boolean = true;
  keypoint3: boolean = true;
  keypoint4: boolean = true;
  keypoint5: boolean = true;
  keypoint6: boolean = true;
  keypoint7: boolean = true;
  keypoint8: boolean = true;
  seqArray: string[] = [];
  lichaamsdeel : string = "redHand2";
  constructor(private keypointService: KeypointService, private httpService: HttpService) {
    this.keypoint = keypointService.getKeypoint();
    this.httpService.sendKeypoints();

  }
  ngOnInit() {
  }
  getSequences(){
    this.sequences = this.httpService.getSequences();
    console.log(this.sequences);

    this.seqArray = this.seq.split(" ");
    console.log(this.seqArray);
    let ld = document.getElementById("lichaamsdeell") as HTMLImageElement;
    switch (this.seqArray[0]) {
      case "RH":
        ld.src = "../../../assets/redHand2.png";
        break;
      case "LH":
        ld.src = "../../../assets/blueHand1.png";
        break;
      case "RF":
        ld.src = "../../../assets/redFeet2.png";
        break;
      case "LF":
        ld.src = "../../../assets/blueFeet1.png";
        break;
    }

    for (let i = 1; i < this.seqArray.length; i++) {
      console.log(this.seqArray[i]);
      setTimeout(() => {
        switch (this.seqArray[i]){
        case "1":
          this.keypoint1 =  false;
          break;
        case "2":
          this.keypoint2 =  false;
          break;
        case "3":
          this.keypoint3 =  false;
          break;
        case "4":
          this.keypoint4 =  false;
          break;
        case "5":
          this.keypoint5 =  false;
          break;
        case "6":
          this.keypoint6 =  false;
          break;
        case "7":
          this.keypoint7 =  false;
          break;
        case "8":
          this.keypoint8 =  false;
          break;
      } }, i*50);

    }
  }
}
