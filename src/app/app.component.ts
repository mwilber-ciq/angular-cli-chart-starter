import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeChart: string;

  constructor() {
    this.activeChart = "helloworld";
  }

  SetActive(chartName){
    this.activeChart = chartName || "helloworld"; // Default to helloworld chart
  }
}