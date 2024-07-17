import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IChartData } from './i-chart-data.dto';
import { cumulativeAverageData, cumulativeEconomyData, cumulativeStrikeRateData, wicketsByTeamData } from '../chartData';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor() { }

  public getCumulativeAverageSeries(): Observable<IChartData> {
    return of(cumulativeAverageData);
  }

  public getCumulativeStrikeRateSeries(): Observable<IChartData> {
    return of(cumulativeStrikeRateData);
  }

  public getCumulativeEconomySeries(): Observable<IChartData> {
    return of(cumulativeEconomyData);
  }

  public getWicketsByTeamSeries(): Observable<IChartData> {
    return of(wicketsByTeamData);
  }
}
