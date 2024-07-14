import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IChartData } from '../i-chart-data.dto';

@Component({
  selector: 'app-wkts-match',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './wkts-match.component.html',
  styleUrl: './wkts-match.component.css'
})
export class WktsMatchComponent {
  public data: IChartData;

  constructor() {
    this.data = {
      chartData: [
        {
          data: [5, 6, 1, 2, 7, 2, 3, 0, 2, 1, 4, 2, 6, 1, 1, 3, 7, 1, 6, 2, 7, 1, 5, 5, 9, 3, 3, 4, 5, 2, 2, "NULL", 2, 3, 4, 2, 9, 2, 4, 6, 0, 0, 5, 3, 8, 0, 5, 4, 11, 5, 4, 3, 2, 6, 4, 5, 7, 3, 4, 7, 5, 6, 3, 2, 3, 4, 5, 4, 3, 6, 1, 3, 5, 1, 1, 6, 4, 4, 3, 3, 7, 2, 10, 3, 2, 2, 5, 2, 3, 2, 4, 3, 7, 5, 4, 5, 7, 5, 4, 4, 6, 7, 2, 4, 3, 0, 7, 4, 3, 6, 1, 2, 4, 10, 8, 3, 4, 4, 1, 4, 0, 0, 3, 7, 3, 7, 5, 5, 9, 2, 6, 4, 4, 1, 3, 5, 4, 5, 4, 9, 4, 2, 5, 1, 0, 5, 2, 3, 0, 2, 7, 3, 2, 1, 3, 7, 6, 5, 0, 3, 2, 1, 4, 5, 4, 2, 3, 4, 1, 6, 5, 6, 1, 6, 3, 5, 3, 7, 3, 1, 2, 1, 1, 5, 1, 2, 2, 4],
          label: 'wickets per match',
          // borderColor: Utils.CHART_COLORS.red,
          // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          // stack: 'combined',
          type: 'bar',
          order: 1
        },
        {
          data: [5.00, 5.50, 4.00, 3.50, 4.20, 3.83, 3.71, 3.25, 3.11, 2.90, 3.00, 2.92, 3.15, 3.00, 2.87, 2.88, 3.12, 3.00, 3.16, 3.10, 3.29, 3.18, 3.26, 3.33, 3.56, 3.54, 3.52, 3.54, 3.59, 3.53, 3.48, 3.48, 3.44, 3.42, 3.44, 3.40, 3.56, 3.51, 3.53, 3.59, 3.50, 3.41, 3.45, 3.44, 3.55, 3.47, 3.50, 3.51, 3.67, 3.69, 3.70, 3.69, 3.65, 3.70, 3.70, 3.73, 3.79, 3.77, 3.78, 3.83, 3.85, 3.89, 3.87, 3.84, 3.83, 3.83, 3.85, 3.85, 3.84, 3.87, 3.83, 3.82, 3.83, 3.79, 3.76, 3.79, 3.79, 3.79, 3.78, 3.77, 3.81, 3.79, 3.87, 3.86, 3.83, 3.81, 3.83, 3.80, 3.80, 3.78, 3.78, 3.77, 3.80, 3.82, 3.82, 3.83, 3.86, 3.88, 3.88, 3.88, 3.90, 3.93, 3.91, 3.91, 3.90, 3.87, 3.90, 3.90, 3.89, 3.91, 3.88, 3.86, 3.87, 3.92, 3.96, 3.95, 3.95, 3.95, 3.92, 3.92, 3.89, 3.86, 3.85, 3.88, 3.87, 3.90, 3.90, 3.91, 3.95, 3.94, 3.95, 3.95, 3.95, 3.93, 3.93, 3.93, 3.93, 3.94, 3.94, 3.98, 3.98, 3.96, 3.97, 3.95, 3.92, 3.93, 3.92, 3.91, 3.89, 3.87, 3.89, 3.89, 3.88, 3.86, 3.85, 3.87, 3.88, 3.89, 3.87, 3.86, 3.85, 3.83, 3.83, 3.84, 3.84, 3.83, 3.83, 3.83, 3.81, 3.82, 3.83, 3.84, 3.83, 3.84, 3.83, 3.84, 3.84, 3.85, 3.85, 3.83, 3.82, 3.81, 3.79, 3.80, 3.78, 3.77, 3.76, 3.76],
          label: 'cumul wickets per match',
          // borderColor: Utils.CHART_COLORS.blue,
          // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          type: 'line',
          order: 0
        }
      ],
      chartLabels: ["2003-05-22", "2003-06-05", "2003-07-24", "2003-07-31", "2003-08-14", "2003-08-21", "2003-09-04", "2003-12-18", "2004-07-29", "2004-08-12", "2004-08-19", "2005-01-13", "2006-03-18", "2006-11-23", "2006-12-01", "2007-01-02", "2007-07-19", "2007-07-27", "2007-08-09", "2007-12-01", "2008-03-13", "2008-03-22", "2008-05-15", "2008-05-23", "2008-06-05", "2008-07-10", "2008-07-18", "2008-07-30", "2008-08-07", "2008-12-11", "2008-12-19", "2009-02-13", "2009-02-15", "2009-02-26", "2009-03-06", "2009-05-06", "2009-05-14", "2009-07-08", "2009-07-16", "2009-07-30", "2009-08-07", "2009-08-20", "2009-12-16", "2009-12-26", "2010-01-03", "2010-01-14", "2010-05-27", "2010-06-04", "2010-07-29", "2010-08-06", "2010-08-18", "2010-08-26", "2010-11-25", "2010-12-03", "2010-12-16", "2010-12-26", "2011-01-03", "2011-05-26", "2011-06-16", "2011-07-21", "2011-07-29", "2011-08-10", "2011-08-18", "2012-01-17", "2012-01-25", "2012-02-03", "2012-03-26", "2012-04-03", "2012-05-17", "2012-05-25", "2012-07-19", "2012-08-02", "2012-08-16", "2012-11-15", "2012-11-23", "2012-12-05", "2012-12-13", "2013-03-06", "2013-03-14", "2013-03-22", "2013-05-16", "2013-05-24", "2013-07-10", "2013-07-18", "2013-08-01", "2013-08-09", "2013-08-21", "2013-11-21", "2013-12-05", "2013-12-13", "2013-12-26", "2014-01-03", "2014-06-12", "2014-06-20", "2014-07-09", "2014-07-17", "2014-07-27", "2014-08-07", "2014-08-15", "2015-04-13", "2015-04-21", "2015-05-01", "2015-05-21", "2015-05-29", "2015-07-08", "2015-07-16", "2015-07-29", "2015-10-13", "2015-10-22", "2015-11-01", "2016-01-02", "2016-01-14", "2016-01-22", "2016-05-19", "2016-05-27", "2016-06-09", "2016-07-22", "2016-08-03", "2016-08-11", "2016-11-17", "2016-11-26", "2016-12-08", "2017-07-06", "2017-07-14", "2017-07-27", "2017-08-04", "2017-08-17", "2017-08-25", "2017-09-07", "2017-11-23", "2017-12-02", "2017-12-14", "2017-12-26", "2018-01-04", "2018-03-22", "2018-03-30", "2018-05-24", "2018-06-01", "2018-08-01", "2018-08-09", "2018-08-18", "2018-08-30", "2018-09-07", "2018-11-06", "2018-11-14", "2019-01-23", "2019-01-31", "2019-02-09", "2019-08-01", "2019-12-26", "2020-01-03", "2020-07-08", "2020-07-24", "2020-08-05", "2020-08-13", "2020-08-21", "2021-01-22", "2021-02-05", "2021-02-24", "2021-03-04", "2021-06-02", "2021-06-10", "2021-08-04", "2021-08-12", "2021-08-25", "2021-09-02", "2021-12-16", "2021-12-26", "2022-01-05", "2022-06-02", "2022-06-10", "2022-07-01", "2022-08-17", "2022-08-25", "2022-09-08", "2022-12-01", "2022-12-09", "2023-02-16", "2023-02-24", "2023-06-16", "2023-06-28", "2023-07-19", "2023-07-27", "2024-02-02", "2024-02-15", "2024-02-23", "2024-03-07", "2024-07-10"]
    }
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: {
        stacked: false
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'JM Anderson'
      },
      subtitle: {
        display: true,
        text: 'Wickets per match analysis',
        // color: 'blue',
        // font: {
        //   size: 12,
        //   family: 'tahoma',
        //   weight: 'normal',
        //   style: 'italic'
        // }
      }
    }
  };
}