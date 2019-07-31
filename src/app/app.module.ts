import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartHelloworldComponent } from './chart-helloworld/chart-helloworld.component';
import { ChartQuotefeedComponent } from './chart-quotefeed/chart-quotefeed.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartHelloworldComponent,
    ChartQuotefeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
