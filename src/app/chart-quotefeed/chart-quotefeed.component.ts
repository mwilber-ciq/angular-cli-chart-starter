import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Declare reference to global var CIQ. Attached in angular.json setting {project}.architect.build.options.scripts
declare var CIQ: any;
// Declare a reference to the quotefeed simulator. Attached in angular.json setting {project}.architect.build.options.scripts
declare var quoteFeedSimulator: any;

@Component({
  selector: 'app-chart-quotefeed',
  templateUrl: './chart-quotefeed.component.html',
  styleUrls: ['./chart-quotefeed.component.css']
})
export class ChartQuotefeedComponent implements OnInit {

  @ViewChild('chart', {static: true}) chartElement: ElementRef; 
  ciq: any;

  constructor() { }

  public ngOnInit(): void {

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
    
    this.ciq.attachQuoteFeed(quoteFeedSimulator,{refreshInterval:1});

    this.ciq.loadChart({symbol: 'APPL'}, function(err) {
      if(err) console.log('error loading chart', err);
    });

  }

}
