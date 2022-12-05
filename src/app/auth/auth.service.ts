import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isLoggedIn: boolean;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  apiKey = 'AIzaSyBQ1BAdTYq5Dj8zEtrEMNlaGN2UC1VObJk';
  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  user: User;

  constructor(private http: HttpClient, private router: Router) {}

  get isAuthendicated() {
    return this.loggedIn.asObservable();
  }

  signUp(email: string, password: string) {
    return this.http.post(this.signUpURL, { email: email, password: password });
  }

  signIn(email: string, password: string) {
    if (email !== '' && password !== '') {
      this.loggedIn.next(true);
    }
    return this.http.post(this.signInURL, { email: email, password: password });
  }

  createUser(email: string, id: string, _token: string, expirationDate: Date) {
    this.user = new User(email, id, _token, expirationDate);

    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
    // this.isLoggedIn = false;
    !this.user;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
