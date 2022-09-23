import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    
  ],

  
  
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ]

})
export class AppModule { }
