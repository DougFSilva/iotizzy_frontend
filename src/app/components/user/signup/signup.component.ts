import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateUserForm } from 'src/app/models/CreateUSerForm';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('differentEmailMsg') differentEmailMsg: ElementRef<HTMLInputElement>;

  form: CreateUserForm = {
    name: '',
    email: '',
    password: '',
    profileType: ''
  }

  confirmEmail: string = ''
  confirmedEmail:boolean = false

  name = new FormControl(null, Validators.minLength(3))
  email = new FormControl(null, Validators.minLength(5));
  password = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: UserService,
    private toast: ToastrService,
    private router: Router
  ) { }

  create(): void {
    this.service.createUser(this.form).subscribe({
      next: (value) => {
        this.toast.success('User created', 'SUCCESS')
        this.router.navigate(['/login'])
      }, error: (err) => [
        this.toast.error( err.error, 'ERROR')
      ]
    })
  }

  emailVerify(): void{
    if(this.form.email == this.confirmEmail){
      this.differentEmailMsg.nativeElement.style.visibility = 'hidden'
      this.confirmedEmail = true
    }else {
      this.differentEmailMsg.nativeElement.style.visibility = 'visible'
      this.confirmedEmail = false
    }
  }

  validFields(): boolean{
    return this.name.valid && this.email.valid && this.password.valid && this.confirmedEmail
  }

}
