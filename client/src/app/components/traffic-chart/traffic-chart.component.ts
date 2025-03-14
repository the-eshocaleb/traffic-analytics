import { Component, inject, OnInit, signal } from '@angular/core'; 
import { Chart, registerables } from 'chart.js';
import { TrafficDataService } from '../../services/traffic-data.service';
import { TrafficDataType } from '../../model/traffic-data.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-traffic-chart',
  imports: [],
  templateUrl: './traffic-chart.component.html',
  styleUrl: './traffic-chart.component.css'
})
export class TrafficChartComponent implements OnInit{
  public chart: any;
  trafficService = inject(TrafficDataService);
  // trafficData = signal<Array<TrafficDataType>>([]);
  // This is a mock data for the traffic data, fetch later from the server
  trafficData:Array<TrafficDataType> = [
    { page_id: 1, page_url: '/home', traffic: 125 },
    { page_id: 2, page_url: '/about', traffic: 80 },
    { page_id: 3, page_url: '/contact', traffic: 300 },
    { page_id: 4, page_url: '/product', traffic: 45 },
    { page_id: 5, page_url: '/blog', traffic: 95 },
  ];
  
  labels = this.trafficData.map((data) => data.page_url);
  data = this.trafficData.map((data) => data.traffic);
  
  createChart(){
    this.chart = new Chart("trafficChart", {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Traffic per page',
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  ngOnInit(): void {
    // this.trafficService.getTrafficData()
    // .pipe(catchError((error) => {
    //   console.log('Error fetching traffic data', error);
    //   throw error;
    // }))
    // .subscribe((data) => {
    //   this.trafficData.set(data)
    // })

    Chart.register(...registerables);

    this.createChart();
}
}
