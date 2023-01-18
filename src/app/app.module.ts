import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { JobsComponent } from './jobs/jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VijayComponent } from './vijay/vijay.component';
import { NareshComponent } from './naresh/naresh.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    RegistraionComponent,
    JobsComponent,
    VijayComponent,
    NareshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
