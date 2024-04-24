import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apod } from './type/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(
    private http: HttpClient
  ) { }

  getApod(startDate: string, endDate: string): Observable<apod[]>{
    const url = "https://api.nasa.gov/planetary/apod?"
    const apiKey = "w8fN0l7o2TdR3TMYdNY2HUTkpPivr04EbE062Duk"
    const apiUrl = url + "start_date=" + startDate + '&end_date=' + endDate + "&api_key=" + apiKey
    return this.http.get<apod[]>(apiUrl)
  }

  getApodByDay(date: string): Observable<apod>{
    const url = "https://api.nasa.gov/planetary/apod?"
    const apiKey = "w8fN0l7o2TdR3TMYdNY2HUTkpPivr04EbE062Duk"
    const apiUrl = url + "date=" + date + "&api_key=" + apiKey
    return this.http.get<apod>(apiUrl)
  }
}
