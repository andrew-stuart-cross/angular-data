import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  // ...


  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Account B'
    },
    {
      data: [45, 67, 800, 500],
      label: 'Account C'
    }
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];

  chartOptions = {
    responsive: true
  };
  
}

