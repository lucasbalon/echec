import {Validators} from "@angular/forms";
import {Roles} from "./Roles";

export const LOGIN_FORM ={
  identifiant:['',[Validators.required,Validators.minLength(4)]],
  motDePasse:['',[Validators.required,Validators.minLength(4)]]
}

export interface Auth {
  token: string;
  role: Roles[];
  username: string;
}
