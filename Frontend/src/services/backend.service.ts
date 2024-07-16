import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutModel } from '../app/pages/about/about-us.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = 'https://localhost:5189';
  private baseUrl = 'https://localhost:7119/api';

  constructor(private http: HttpClient) {}

  getWeatherForecast(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/weatherforecast`);
  }

  getAbout(): Observable<AboutModel> {
    return this.http.get<AboutModel>(`${this.apiUrl}/about`);
  }
}
