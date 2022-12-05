import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { StoreComponent } from './components/store/store.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [

  {path: '' , component: HomeComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'user' ,  component: UserComponent, canActivate:[AuthGuard], children:[
    {path: ':id' ,  component: UserComponent},
  ]},
  {path: 'store' ,  component: StoreComponent, canActivate:[AuthGuard]},
  {path: '404' , component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
