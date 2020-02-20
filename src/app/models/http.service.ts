import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {KeypointService} from "./keypoint.service";
import {Keypoint} from "./keypoint";
import {Car} from "../../../../h1314-oefening4/src/app/models/car.model";
import {Sequence} from "./sequence";


@Injectable()
export class HttpService {
    private apiUrlKeypoints: string;
    private apiUrlSequence: string;

    constructor(private http: HttpClient, private keypointService : KeypointService) {
        this.apiUrlKeypoints = 'http://localhost:8080/keypoint';
        this.apiUrlSequence =  'http://localhost:8080/sequences';
    }
    sendKeypoints(): Observable<Object> {
        return this.http.put(this.apiUrlKeypoints, this.keypointService.getKeypoint());
    }
    getSequences(): Observable<Sequence[]> {
        return this.http.get<Sequence[]>(this.apiUrlSequence);
    }
}
