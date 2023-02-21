import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './main/main.component';
import { ResetComponent } from './reset/reset.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
   MainComponent,
   ResetComponent,
  LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
