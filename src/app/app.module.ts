import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StateViewComponent } from './state-view/state-view.component';
import { StateAdderComponent } from './state-adder/state-adder.component';
import { DistrictViewComponent } from './district-view/district-view.component';
import { DistrictAdderComponent } from './district-adder/district-adder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StateViewComponent,
    StateAdderComponent,
    DistrictViewComponent,
    DistrictAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
