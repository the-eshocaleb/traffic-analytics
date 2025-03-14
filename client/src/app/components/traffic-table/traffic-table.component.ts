import { Component, inject, OnInit, signal } from '@angular/core';
import { TrafficDataService } from '../../services/traffic-data.service';
import {TrafficDataType}  from '../../model/traffic-data.type';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterTrafficPipe } from '../../pipes/filter-traffic.pipe';

@Component({
  selector: 'app-traffic-table',
  imports: [FormsModule, FilterTrafficPipe],
  templateUrl: './traffic-table.component.html',
  styleUrl: './traffic-table.component.css',
})
export class TrafficTableComponent implements OnInit {
  // inject the traffic data service
  trafficService = inject(TrafficDataService);

  // create a signal for the traffic data (array of TrafficDataType)
  trafficData = signal<Array<TrafficDataType>>([]);
  threshold = signal(0);
  


  ngOnInit(): void {
    // set the traffic data from the service to the signal once the component is loaded
    // this.trafficService.getTrafficData()
    //   .pipe(
    //     catchError((error) => {
    //       console.error('Error fetching traffic data', error);
    //       throw error;
    //     })
    //   ).subscribe((data) => {
    //     this.trafficData.set(data);
    //   });

    // set the traffic data to a static array for now
    this.trafficData.set([
      { page_id: 1, page_url: '/home', traffic: 125 },
      { page_id: 2, page_url: '/about', traffic: 80 },
      { page_id: 3, page_url: '/contact', traffic: 300 },
      { page_id: 4, page_url: '/product', traffic: 45 },
      { page_id: 5, page_url: '/blog', traffic: 95 },
    ]);
  }

}
