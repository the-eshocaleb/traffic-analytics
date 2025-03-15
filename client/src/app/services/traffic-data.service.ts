import { inject, Injectable } from '@angular/core';
import { TrafficDataType } from '../model/traffic-data.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrafficDataService {
  // make the http client available to the service, first define it in the provider array in the app.config.ts
  http = inject(HttpClient);

  // function to fetch data from the server, retuns an observable of type TrafficDataType
  getTrafficData() {
    const url = "http://localhost:8000/api/traffic";
    return this.http.get<Array<TrafficDataType>>(url);
  }
 
}
