import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
const data = localStorage.getItem(email);
if (data) {
  const user = JSON.parse(data);
  if (user.password === password)
  {
    localStorage.setItem('loggedInUser', email);
    return true;
  }
  return false;
}
return false;

  }
}