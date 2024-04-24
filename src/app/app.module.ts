import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayCardComponent } from './day-card/day-card.component';
import { DayDetailsComponent } from './day-details/day-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthViewComponent,
    DayCardComponent,
    DayDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
