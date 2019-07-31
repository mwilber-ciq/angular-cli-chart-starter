import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// declare reference to global var CIQ. Attached in angular.json setting {project}.architect.build.options.scripts 
declare var CIQ: any;

@Component({
  selector: 'app-chart-helloworld',
  templateUrl: './chart-helloworld.component.html',
  styleUrls: ['./chart-helloworld.component.css']
})
export class ChartHelloworldComponent implements OnInit {

  @ViewChild('chart', {static: true}) chartElement: ElementRef; //Pointer to the chart continer element
  ciq: any;

  constructor() { }

  ngOnInit() {

    this.ciq = new CIQ.ChartEngine({
      container: this.chartElement.nativeElement,
      layout: {
          chartType: 'candle',
          candleWidth: 30,
          periodicity: 1,
          interval: 'day'
      },
      preferences: {
          currentPriceLine: true,
          whitespace: 0
      },
      chart: {
          yAxis: {
              position: 'right'
          }
      }
    });

    this.ciq.loadChart(
      'IBM', [{
          Date: '1993-01-29',
          Open: 43.97,
          High: 43.97,
          Low: 43.75,
          Close: 43.94,
          Volume: 1003200
      }, {
          Date: '1993-02-01',
          Open: 43.97,
          High: 44.25,
          Low: 43.97,
          Close: 44.25,
          Volume: 480500
      }, {
          Date: '1993-02-02',
          Open: 44.22,
          High: 44.38,
          Low: 44.13,
          Close: 44.34,
          Volume: 201300
      }, {
          Date: '1993-02-03',
          Open: 44.41,
          High: 44.84,
          Low: 44.38,
          Close: 44.81,
          Volume: 529400
      }, {
          Date: '1993-02-04',
          Open: 44.97,
          High: 45.09,
          Low: 44.47,
          Close: 45,
          Volume: 531500
      }, {
          Date: '1993-02-05',
          Open: 44.97,
          High: 45.06,
          Low: 44.72,
          Close: 44.97,
          Volume: 492100
      }, {
          Date: '1993-02-08',
          Open: 44.97,
          High: 45.13,
          Low: 44.91,
          Close: 44.97,
          Volume: 596100
      }, {
          Date: '1993-02-09',
          Open: 44.81,
          High: 44.81,
          Low: 44.56,
          Close: 44.66,
          Volume: 122100
      }, {
          Date: '1993-02-10',
          Open: 44.66,
          High: 44.75,
          Low: 44.53,
          Close: 44.72,
          Volume: 379600
      }]
    );
  }

}
