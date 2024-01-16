import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/user/account/account.component';
import { LoginModule } from './components/login/login.module';
import { SignupModule } from './components/user/signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    HttpClientModule,
    LoginModule,
    SignupModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
