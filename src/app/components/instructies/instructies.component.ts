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
  constructor(private keypointService: KeypointService, private httpService: HttpService) {
    this.keypoint = keypointService.getKeypoint();
    this.httpService.sendKeypoints();
  }
  ngOnInit() {
  }
  getSequences(){
    this.sequences = this.httpService.getSequences();
    console.log(this.sequences);
  }
}
