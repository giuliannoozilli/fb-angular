// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
/*
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
*/
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDIfMVZWTeV9aw-XuTOAyjHDwpKr7f75dg',
    authDomain: 'ejemplo-firestore-a28e6.firebaseapp.com',
    projectId: 'ejemplo-firestore-a28e6',
    storageBucket: 'ejemplo-firestore-a28e6.appspot.com',
    messagingSenderId: '1054497829442',
    appId: '1:1054497829442:web:d801ad07b1b076c50af3db',
    measurementId: 'G-1NF7J7PK2Z'
  }
};
/*
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
