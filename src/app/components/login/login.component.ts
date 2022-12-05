import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  Form,
} from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../model/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  signupform: any;
  // isLoggedIn = false;
  isLoggedIn$: Observable<boolean>;
  constructor(
    private loginService: LoginService,
    private firebase: FirebaseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit(loginform: FormGroup) {
    // inserisce utente nella tabella users di firebase
    // this.firebase.insertUser(
    //   'https://login-angular-test-7aefa-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    //   {
    //     username:loginform.value.username,
    //     password:loginform.value.password
    // }).subscribe(data => {
    //   console.log(data)
    // })
    if (!loginform.valid) {
      return;
    }
    const email = loginform.value.email;
    const password = loginform.value.password;

    this.authService.signIn(email, password).subscribe((data: any) => {
      console.log(data);
      const expirationDate = new Date();
      this.authService.createUser(
        data.email,
        data.localId,
        data.idToken,
        expirationDate
      );
      localStorage.setItem('user', JSON.stringify(this.authService.user));
      this.isLoggedIn$ = this.authService.isAuthendicated;
      console.log(this.authService.user);
    });
    loginform.reset();
  }
}
