import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Auth} from "../models/Auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatusListener = new Subject<boolean>();
  connectedUser = new BehaviorSubject<Auth | null>(null)
  constructor(private readonly _httpClient: HttpClient,
              private readonly _router: Router,
              @Inject('urlBackEnd') private readonly _urlBack: string) { }

  login(auth: Auth) {
    return this._httpClient.post<Auth>(`${this._urlBack}/joueur/login`, auth).pipe(
      tap( value => {
        localStorage.setItem('token', value.token);
        localStorage.setItem('role', value.role.toString());
        localStorage.setItem('login', value.username);
        this.connectedUser.next(value);
        this._router.navigate(['home']);
      })
    );
  }

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('login');
    this.connectedUser.next(null);
    this._router.navigate(['login']);
  }


}
