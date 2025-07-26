import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WeatherservService } from './app/weatherserv.service';

bootstrapApplication(AppComponent, {
providers:[WeatherservService]
}).catch((err) => console.error(err));
