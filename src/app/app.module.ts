import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { MyMaterialModule } from  './material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorComponent } from './error.component';

const  appRoutes:  Routes  = [
  { path:  'customer-list', component:  CustomerListComponent },
  { path:  'customer-create', component:  CustomerCreateComponent },
  {
  path:  'login',
  component:  LoginComponent
  },
  { path:  '',
  redirectTo:  '/login',
  pathMatch:  'full'
  },
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  entryComponents: [ErrorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
