import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(signupform:NgForm){
    const email =signupform.value.email;
    const password =signupform.value.password;


    this.authService.signUp(email,password).subscribe(data =>{
      console.log(data)
    })
    signupform.reset()
  }

}


