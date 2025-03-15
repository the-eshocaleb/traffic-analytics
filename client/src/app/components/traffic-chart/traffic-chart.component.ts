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
  trafficData = signal<Array<TrafficDataType>>([]);

  ngOnInit(): void {
    this.trafficService.getTrafficData()
    .pipe(catchError((error) => {
      console.log('Error fetching traffic data', error);
      throw error;
    }))
    .subscribe((data) => {

      // register chart.js
      Chart.register(...registerables);

      // create chart
      this.chart = new Chart("trafficChart", {
        type: 'bar',
        data: {
          labels: data.map((row) => row.page_url),
          datasets: [{
            label: 'Traffic per page',
            data: data.map((row) => row.traffic),
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
          aspectRatio: 1,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    })

}
}
