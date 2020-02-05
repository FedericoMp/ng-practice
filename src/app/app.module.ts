import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
import { ServerUrlComponent } from './serversComponents/server/server-url.component';
import { ServerUrlOneComponent } from './serversComponents/server/server-url-one.component';
import { UrlQueryComponent } from './urlQueryParams/url-query.component';
import { NavBarComponent } from './util/components/navbar.component';
// Directives
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/structural-directives/unless.directive';
// Services
import { AccountService } from './services/account.service';
import { LogService } from './services/log.service';

const appRoutes: Routes = [
  { path: 'servers', component: ServersComponent },
  { path: 'server-url', component: ServerUrlComponent },
  { path: 'server-url/:id', component: ServerUrlOneComponent },
  { path: 'url-query/:id/edit', component: UrlQueryComponent },
  { path: 'parent-child', component: ParentComponent },
  { path: 'new-account', component: NewAccountComponent },
  { path: 'odd-numbers', component: OddNumbersComponent },
  { path: '**', redirectTo: 'servers' }
];

const appComponents = [
  ServerComponent,
  ServersComponent,
  AlertComponent,
  ServerInputComponent,
  ParentComponent,
  ChildComponent,
  OddNumbersComponent,
  NewAccountComponent,
  AccountComponent,
  NavBarComponent,
  ServerUrlComponent,
  ServerUrlOneComponent,
  UrlQueryComponent
];

const appDirectives = [
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective
];

@NgModule({
  declarations: [
    AppComponent,
    appComponents,
    appDirectives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AccountService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
