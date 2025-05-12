import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    const storedUser = localStorage.getItem(this.user.email);
    
    if (!storedUser) {
      this.errorMessage = 'No account found with this email.';
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.password !== this.user.password) {
      this.errorMessage = 'Incorrect password.';
      return;
    }

    // Login successful
    this.errorMessage = '';
    alert('Login successful!');
    this.router.navigate(['/home']);
  }
}
