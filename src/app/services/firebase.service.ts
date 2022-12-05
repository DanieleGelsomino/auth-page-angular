import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  insertUser(url: string, body: {}) {
    return this.http.post(url, body);
  }

  getUsers(url: string) {
    return this.http.get(`${url}?auth=${this.authService.user.token}`);
  }
}
