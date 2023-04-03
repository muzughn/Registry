import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  login(email: string, password: string): boolean {
    // Add code to authenticate the user
    if (email === 'admin@example.com' && password === 'admin') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
