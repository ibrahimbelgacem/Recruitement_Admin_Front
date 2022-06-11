import { ReactiveFormsModule } from '@angular/forms';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {CdkStepperModule} from '@angular/cdk/stepper';
//import {NgStepperModule} from 'ng-stepper';
//import { NgSelectModule,NgOption } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AutenticationModule } from './autentication/autentication.module';
import { CondidatureComponent } from './condidature/condidature.component';

@NgModule({
  declarations: [AppComponent, CondidatureComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    AutenticationModule,
   // CdkStepperModule,
   // NgStepperModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
