import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected readonly localStorage;

  constructor(private readonly _authService: AuthService) {
    this.localStorage = localStorage;
  }

  async logout() {
    try {
      await this._authService.logout();
    } catch (error) {
      console.error(error);
    }
  }
}
