import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  store = {
    email: '',
    password: '',
    error: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    const data = localStorage.getItem(this.store.email);
    if (data) {
      const user = JSON.parse(data);
      if (user.password === this.store.password) {
        alert('Login successful!');
        this.store.error = '';
      } else {
        this.store.error = 'Incorrect password';
      }
    } else {
      this.store.error = 'User not found';
    }

  }
}
