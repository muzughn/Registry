import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  login() {
    const isLoggedIn = this.authService.login(this.email, this.password);
    if (isLoggedIn) {
      // Navigate to the home page
    }
    else {
      // Display an error message
    }
  }
}
