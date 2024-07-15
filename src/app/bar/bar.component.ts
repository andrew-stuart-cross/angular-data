import { Component, signal, Signal, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { IChartData } from '../i-chart-data.dto';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public chartPlugins = [ChartDataLabels];
  public data: IChartData;

  public btnText = signal('show 5w count');


  constructor() {
    this.data = {
      chartData: [
        {
          data: [149, 117, 103, 91, 84, 82, 58, 11, 9],
          label: 'matches'
        },
        {
          data: [39, 39, 29, 23, 20, 20, 14, 2, 2],
          label: 'wickets'
        },
        {
          data: [6, 5, 4, 5, 3, 3, 5, 1, 0],
          label: '5 wickets',
          hidden: true
        }
      ],
      chartLabels: ["v India", "v Australia", "v South Africa", "v West Indies", "v New Zealand", "v Pakistan", "v Sri Lanka", "v Zimbabwe", "v Bangladesh"]
    }
  }

  public toggle5w(): void {
    if (this.data?.chartData[2].hidden){
      this.data.chartData[2].hidden=false;
      this.chart?.update();
      this.btnText.set('hide 5w count');
    } else {
      this.data.chartData[2].hidden=true;
      this.chart?.update();
      this.btnText.set('show 5w count');
    }
  }


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end'
      },
      title: {
        display: true,
        text: 'Matches and wickets taken by opponent'
      },
      subtitle: {
        display: true,
        text: 'JM Anderson',
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