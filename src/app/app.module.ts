import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { AlertComponent } from './alerts/alert.component';
import { SuccessAlertComponent } from './alerts/success-alert.component';
import { WarningAlertComponent } from './alerts/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
