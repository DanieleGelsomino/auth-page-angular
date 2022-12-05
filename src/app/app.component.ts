import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-routing';

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      const user = JSON.parse(localStorage.getItem('user')!);
      this.authService.createUser(
        user.email,
        user.id,
        user._token,
        user._expirationDate
      );
    }
  }
}
