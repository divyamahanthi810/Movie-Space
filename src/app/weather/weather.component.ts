import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { WeatherservService } from '../weatherserv.service'; 
@Component({
  selector: 'app-weather',
  imports: [CommonModule ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers:[WeatherservService],
  template: `
    <div *ngIf="weatherMessage; else errorTpl">
      {{ weatherMessage }}
    </div>
    <ng-template #errorTpl>
      <p style="color: red;">{{ errorMessage }}</p>
    </ng-template>
  `
})
export class WeatherComponent {
weather: any;
weatherMessage: string | null = null;
errorMessage: string | null = null;

  constructor(private weatherService: WeatherservService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
    this.weatherService.getWeatherWithError()
      .pipe(
        catchError(err => {
          this.errorMessage = 'Failed to load weather data.';
          return of(null); 
        })
      )
      .subscribe(data => {
        this.weatherMessage = data;
      });
  }
}
