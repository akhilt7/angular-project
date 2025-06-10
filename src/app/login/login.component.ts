import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(form: any) {

    if (form.invalid) {
    alert('Please fill in all required fields correctly.');
    return;
  }

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
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
