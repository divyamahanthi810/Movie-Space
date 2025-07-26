import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { LoggerServiceService } from './logger-service.service';
@Injectable({
  providedIn: 'root'
})
export class WeatherservService {
  private weatherData = {
    city: 'Vizag',
    temperature: 28,
    description: 'Partly cloudy'
  };
  constructor(private logger: LoggerServiceService) {}
  getWeather(): Observable<{ city: string; temperature: number; description: string }> {
    this.logger.log('getWeather() method was called.');
    return of(this.weatherData);
  }
  getWeatherWithError(): Observable<string> {
    return throwError(() => new Error('Weather data not available!'));
  }
}
