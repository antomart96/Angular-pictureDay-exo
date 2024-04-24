import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApodService } from '../apod.service';
import { apod } from '../type/apod';
@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.css']
})
export class DayDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private apodService: ApodService,
    private location: Location,
  ){}

  date?= this.route.snapshot.paramMap.get('date')

  dayData?:apod

    getDay(){
      if(this.date){
        this.apodService.getApodByDay(this.date).subscribe(apod => this.dayData = apod)
      }
    }

    ngOnInit(){
      this.getDay();
    }
    back()
    {
      this.location.back();
    }
}
