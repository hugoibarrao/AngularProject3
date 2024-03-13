import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/serivces/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';
  isMsg = false;
  Msg: string|null = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
    , private route: ActivatedRoute

  ) {
    this.route.queryParamMap.subscribe(params => {
      this.Msg = params.get('Msg');
      if ( this.Msg != undefined) {

        this.isMsg = true;
      }
    });
  }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      this.auth.login(email, password)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.router.navigate(['/app']);
          },
          error: () => {
            this.status = 'error';
          }
        });

      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }

}
