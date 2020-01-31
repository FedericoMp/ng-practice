import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Components
import { ServerComponent } from './serversComponents/server/server.component';
import { ServersComponent } from './serversComponents/servers/servers.component';
import { AlertComponent } from './util/alerts/alert.component';
import { ServerInputComponent } from './serversComponents/serverInput/serverInput.component';
import { ParentComponent } from './componentInteraction/parent.component';
import { ChildComponent } from './componentInteraction/child.component';
import { OddNumbersComponent } from './odd-numbers/odd-numbers.component';
import { NewAccountComponent } from './accountComponents/new-account.component';
import { AccountComponent } from './accountComponents/account.component';
// Directives
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/structural-directives/unless.directive';
// Services
import { AccountService } from './services/account.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    ServerInputComponent,
    ParentComponent,
    ChildComponent,
    OddNumbersComponent,
    NewAccountComponent,
    AccountComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AccountService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
