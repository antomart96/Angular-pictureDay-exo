import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayDetailsComponent } from './day-details/day-details.component';

const routes: Routes = [
  {path:"month", component: MonthViewComponent},
  {path:"day/:date", component: DayDetailsComponent},
  {path:"", redirectTo:"month", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
