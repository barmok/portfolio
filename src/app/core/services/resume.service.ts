import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Resume} from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private http: HttpClient) { }

  getBio() {
    return this.http.get<Bio>('assets/json/bio.json');
  }
}
