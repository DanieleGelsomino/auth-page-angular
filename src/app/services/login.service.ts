import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users = [
    { nome: 'danny', email: 'dg@gmail.com' },
    { nome: 'maria', email: 'mary@gmail.com' },
    { nome: 'ettore', email: 'ett@gmail.com' },
    { nome: 'luna', email: 'luna@gmail.com' },
    { nome: 'alice', email: 'ali@gmail.com' },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  getUser(index: number) {
    return this.users[index];
  }
}
