import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherservService } from './weatherserv.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div *ngIf="weather">
      <h2>Weather in {{ weather.city }}</h2>
      <p>Temperature: {{ weather.temperature }}°C</p>
      <p>Description: {{ weather.description }}</p>
    </div>
  `
})
export class AppComponent {
  title = 'Weatherservice';
  weather: any;

  constructor(private weatherService: WeatherservService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
}
}
