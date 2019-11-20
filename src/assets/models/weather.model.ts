export class Weather {
    clouds: number;
    humidity: number;
    pressure: number;
    seaLevel: number;
    temp: number;

    constructor(clouds: number,
                humidity: number,
                pressure: number,
                seaLevel: number,
                temp: number
                ) {
        this.clouds = clouds;
        this.humidity = humidity;
        this.pressure = pressure;
        this.seaLevel = seaLevel;
        this.temp = temp;
    }
}
