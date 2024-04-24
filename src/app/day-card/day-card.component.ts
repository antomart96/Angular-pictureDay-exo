import { Component, Input } from '@angular/core';
import { apod } from '../type/apod';
import { Router } from '@angular/router'

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css']
})
export class DayCardComponent {

  @Input() apod?:apod;

  constructor(
    private route:Router
  ){}

  navigate(){
    this.route.navigateByUrl('day/' + this.apod?.date)
  }
}
