import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticationRoutingModule } from './autentication-routing.module';
import { AutenticationComponent } from '../autentication/autentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AutenticationComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    AutenticationRoutingModule
  ]
})
export class AutenticationModule { }
