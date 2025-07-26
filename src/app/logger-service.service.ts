import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  constructor() { }
  log(message: string): void {
    const timeStamp = new Date().toLocaleString();
    console.log(`[${timeStamp}] ${message}`);
  }
}
