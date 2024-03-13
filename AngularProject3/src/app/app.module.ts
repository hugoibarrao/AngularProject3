import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { customPipe } from './shared/pipes/custom.pipe';
import { NullpipePipe } from './shared/pipes/nullpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NullpipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
