import { Component } from '@angular/core';
import { ApodService } from '../apod.service';
import { apod } from '../type/apod';
import { Input } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {

  constructor(
    private apodService: ApodService
  ){}
  startDate = this.getFirstDayOfMonth();
  endDate = this.getToday();
  apods?: apod[]

  getDays(){
    this.apods = []
    this.apodService.getApod(this.startDate,this.endDate).subscribe(apods => this.apods = apods);
  }

  getFirstDayOfMonth() {
    const today = new Date();
    
    const year = today.getFullYear();
    const month = today.getMonth() + 1; 
    const firstDayOfMonth = new Date(year, month - 1, 1); 
    const formattedDate = `${firstDayOfMonth.getFullYear()}-${(month < 10 ? '0' : '') + month}-01`;
  
    return formattedDate;
  }
  
  getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  formatDate(date:Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnInit(){
    this.getDays();
  }
}
