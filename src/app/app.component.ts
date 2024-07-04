import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { EconomyRateComponent } from './economy-rate/economy-rate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LineComponent, BarComponent, EconomyRateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-data';
}