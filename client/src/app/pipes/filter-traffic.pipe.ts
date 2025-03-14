import { Pipe, PipeTransform } from '@angular/core';
import { TrafficDataType } from '../model/traffic-data.type';

@Pipe({
  name: 'filterTraffic'
})
export class FilterTrafficPipe implements PipeTransform {

  // Filter traffic data based on threshold
  transform(trafficData: TrafficDataType[], threshold: number): TrafficDataType[] {
    return trafficData.filter(data => data.traffic > threshold);
  }

}
