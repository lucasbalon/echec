import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LOGIN_FORM} from "../../models/Auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder,
              private readonly _authService: AuthService) {
    this.loginForm = this._formBuilder.group(LOGIN_FORM);
  }

  login() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe( {
        error: err => {
          if (err.status === 401) {
            alert("Mauvais identifiants");
          } else {
            alert("erreur");
          }
        }
      });
    }else {
      alert("Minimum 4 charactères");
    }
  }

}
