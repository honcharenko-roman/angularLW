// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherURL: 'http://api.openweathermap.org/data/2.5/forecast?id=698740&units=metric&cnt=8&APPID=b7907ab54e93340d252cb8c1c9cbe567',
  apiUrl: 'https://pnit-lessons.azurewebsites.net/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
