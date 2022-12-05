import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  isLoggedIn = true;
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthendicated;
  }

  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
