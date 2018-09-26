// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_server:"http://localhost:3000/",
  firebase: {
    apiKey: "AIzaSyAlOLZXs6arBHzSGq4ULM_gdfuCXh47-Po",
    authDomain: "fir-c3b54.firebaseapp.com",
    databaseURL: "https://fir-c3b54.firebaseio.com",
    projectId: "fir-c3b54",
    storageBucket: "fir-c3b54.appspot.com",
    messagingSenderId: "302533795406"
  },
  push_server : "http://localhost:8000/"
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
