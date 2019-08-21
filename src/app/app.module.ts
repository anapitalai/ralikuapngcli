import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';

import { PropertyService } from './shared/services/property.service';
import { DashboardService } from './shared/services/dashboard.service';
import { StationeryService } from './shared/services/stationery.service';
import { HttpModule } from '@angular/http';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertySingleComponent } from './properties/property-single/property-single.component';
import { PropertyUpdateComponent } from './properties/property-update/property-update.component';
import { AuthService } from './shared/services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCreateComponent } from './dashboard/dashboard-create/dashboard-create.component';
import { DashboardEditComponent } from './dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardSingleComponent } from './dashboard/dashboard-single/dashboard-single.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    PropertiesListComponent,
    PropertyCreateComponent,
    PropertySingleComponent,
    PropertyUpdateComponent,
    AuthComponent,
    DashboardComponent,
    DashboardCreateComponent,
    DashboardEditComponent,
    DashboardSingleComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    PropertyService,
    StationeryService,
    DashboardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
