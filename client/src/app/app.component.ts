import { Component } from '@angular/core';
import { TrafficChartComponent } from './components/traffic-chart/traffic-chart.component';
import { TrafficTableComponent } from './components/traffic-table/traffic-table.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TrafficChartComponent, TrafficTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
