import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  public data: IChartData;

  constructor() {
    this.data = {
      chartData: [
        {
          data: [39, 39, 29, 22, 20, 20, 14, 2, 2],
          label: 'caps'
        },
        {
          data: [149, 117, 103, 87, 84, 82, 58, 11, 9],
          label: 'wickets'
        }
      ],
      chartLabels: ["v India", "v Australia", "v South Africa", "v West Indies", "v New Zealand", "v Pakistan", "v Sri Lanka", "v Zimbabwe", "v Bangladesh"]
    }
  }


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: 'JM Anderson'
      },
      subtitle: {
        display: true,
        text: 'Matches and wickets taken by opponent',
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