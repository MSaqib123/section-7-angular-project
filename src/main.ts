//#region _1_to_5
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/_1_to_5/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//#endregion