import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  user = { 
    name: '', 
    email: '', 
    password: ''
  };

  constructor(private router: Router) {}

  onSignup(form: any) {

     if (form.invalid) {
    alert('Please fill in all required fields correctly.');
    return;
  }

    localStorage.setItem(this.user.email, JSON.stringify(this.user));
    alert('Signup successful!')

    this.user = {
      name: '',
      email: '',
      password: ''
  };

  this.router.navigate(['./home']);

}

}