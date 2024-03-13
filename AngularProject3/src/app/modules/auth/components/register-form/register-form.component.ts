import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
//import { RequestStatus } from 'src/app/models/todo.model';
import { AuthService } from '../../../../serivces/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {

  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],

  })

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });
  showRegister = false;
  status: string = 'init';
  statusUser: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService

  ) {}
  validateUser() {
    console.log("shoto dake misette")
    if (this.formUser.valid) {
      const {  email} = this.formUser.getRawValue();
      const  Msg  = 'ese usuario ya existe' ;
      this.statusUser = 'loading';
      this.auth.is_available(email)
        .subscribe({
          next: (res) => {
            if (res.isAvailable) {
              this.form.controls.email.setValue(email);
              this.form.markAsUntouched();
              this.statusUser = 'success';
              this.showRegister = true;
            
            }
            else {

              this.router.navigate(['/login'], {
                queryParams: { Msg }


              });

            }
              
            
            this.status = 'success';
          },
          error: () => {
            this.status = 'error';
          }
        });
    }
    else {
      this.formUser.markAllAsTouched();
      this.form.markAllAsTouched();
    }
  }
  register() {
    console.log("sayonala")

    if (this.form.valid) {
      this.status = 'loading';
      console.log("sayonala")
       
      const { name, email, password } = this.form.getRawValue();
      console.log(name, email, password);

      this.auth.register(name,email, password)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.router.navigate(['/login']);
          },
          error: () => {
            this.status = 'error';
          }
        });

    } else {
      this.form.markAllAsTouched();
    }
  }
}
