import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gender, Pet } from 'src/assets/enums/enums';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Weather } from 'src/assets/models/weather.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {

    private readonly API = environment.weatherURL;

    constructor(private httpClient: HttpClient) {
    }

    getTemperature(): Observable<Weather[]> {
        return this.httpClient.get(this.API).pipe(
            map((data: any) => data.list)
        );
    }
}
