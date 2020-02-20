import { Injectable } from '@angular/core';
import {Keypoint} from "./keypoint";

@Injectable()
export class KeypointService {
    keypoint: Keypoint;
    constructor() { }

    getKeypoint() {
        return this.keypoint;
    }
    setKeypoint(kp: Keypoint) {
        this.keypoint = kp;
    }
}
