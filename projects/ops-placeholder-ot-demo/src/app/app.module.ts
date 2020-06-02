import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OpsPlaceholderOtModule } from 'projects/ops-placeholder-ot/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OpsPlaceholderOtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
