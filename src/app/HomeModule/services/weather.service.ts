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

    weather: any;

    getTemperature(): Observable<Weather[]> {
        return this.httpClient.get(this.API).pipe(
            map((data: any) => data.list)
            );
    }
}

/*{"cod":"200",
"message":0,
"cnt":2,
"list":[
    {"dt":1574251200,
    "main":
        {"temp":9.26,
        "temp_min":9.26,
        "temp_max":9.71,
        "pressure":1026,
        "sea_level":1026,
        "grnd_level":1019,
        "humidity":69,
        "temp_kf":-0.45},
        "weather":[
            {"id":804,
            "main":"Clouds",
            "description":"overcast clouds",
            "icon":"04d"}],
        "clouds":{"all":90},
        "wind":{"speed":5.3,"deg":91},
        "sys":{"pod":"d"},
        "dt_txt":"2019-11-20 12:00:00"},
    {"dt":1574262000,
    "main":
        {"temp":8.05,
        "temp_min":8.05,
        "temp_max":8.39,
        "pressure":1026,
        "sea_level":1026,
        "grnd_level":1019,
        "humidity":76,
        "temp_kf":-0.34},
        "weather":[
            {"id":804,
            "main":"Clouds",
            "description":"overcast clouds",
            "icon":"04n"}],
            "clouds":{"all":100},
            "wind":{"speed":4.6,"deg":85},
            "sys":{"pod":"n"},
            "dt_txt":"2019-11-20 15:00:00"}]
        "city":
        {"id":698740,
        "name":"Odessa",
        "coord":{"lat":46.4775,
        "lon":30.7326},
        "country":"UA",
        "timezone":7200,
        "sunrise":1574226320,
        "sunset":1574259609}}

*/
