import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/user/account/account.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: NavigationComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:'account',
        component: AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
