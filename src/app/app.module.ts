import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
