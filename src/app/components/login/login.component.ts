import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginForm } from 'src/app/models/LoginForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: LoginForm = {
    username: '',
    password: ''
  }

  constructor(
    private service: AuthService,
    private router: Router,
    private toast: ToastrService) { }

  login(): void{
    this.service.authenticate(this.form).subscribe({
      next: (value) => {
        this.toast.success('Welcome to Iotizzy', "SUCCESS")
        this.router.navigate(['/home'])
      }, error: (err) => {
        this.toast.error(err.error, "ERROR")
      }
    })
  }
}
