import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { map, catchError } from 'rxjs/operators';
import { Weather } from 'src/assets/models/weather.model';
import { HttpErrorResponse } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-table.component.html',
  providers: [WeatherService, DatePipe],
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  myDate: Date = new Date();
  constructor(private weatherService: WeatherService) {
  }

  weathers: Weather[] = [];

  ngOnInit() {
    this.weatherService.getTemperature()
      .subscribe((data: any) =>
        data.forEach(element => {
          this.weathers.push(new Weather(
            element.main.sea_level,
            element.main.sea_level,
            element.main.pressure,
            element.main.humidity,
            element.main.temp));
        }));
  }

  getData(index: number) {
    return moment(Date.now()).add(index, 'days').toDate();
  }
}
