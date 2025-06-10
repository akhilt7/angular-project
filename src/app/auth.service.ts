import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInKey = 'isLoggedIn';
  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());

  isLoggedIn$ = this.loggedIn.asObservable();


  constructor() {}

  login(): void {
    localStorage.setItem(this.isLoggedInKey, 'true');
    this.loggedIn.next(true); 
  }

  logout(): void {
    localStorage.removeItem(this.isLoggedInKey);
    this.loggedIn.next(false);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.isLoggedInKey) === 'true';
  }
}
