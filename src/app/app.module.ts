import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertiesCreateComponent } from './properties/properties-create/properties-create.component';
import { PropertyService } from './shared/services/property.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    PropertiesListComponent,
    PropertiesCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
