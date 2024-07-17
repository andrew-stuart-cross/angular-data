import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IChartData } from './i-chart-data.dto';
import { cumulativeAverageData, cumulativeAveStrikeData } from '../chartData';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor() { }

  public getCumulativeAverageSeries(): Observable<IChartData> {
    return of(cumulativeAverageData)
  }

  public getCumulativeAverageStrikeSeries(): Observable<IChartData> {
    return of(cumulativeAveStrikeData)
  }
}
