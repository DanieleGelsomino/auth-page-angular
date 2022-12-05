import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../auth/auth.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any
  user:any
  isProfile!: boolean;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private firebase: FirebaseService) { }
  ngOnInit(): void {
   if(this.route.snapshot.paramMap.get('id')){
    this.isProfile = true
    this.user = this.loginService.getUser(parseInt(this.route.snapshot.paramMap.get('id')!))

   }else{
    this.isProfile = false
    this.users = this.loginService.getUsers()
   }
  this.firebase.getUsers('https://angular-login-example-6f5c9-default-rtdb.europe-west1.firebasedatabase.app/users.json').subscribe((data:any) => {
    this.users = Object.keys(data).map((key=>{return data[key]}))
    console.log(this.users)
  })

  }

}
