import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';



// Path name will be used in RouterLink
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent}
  ];




export const routing = RouterModule.forRoot(appRoutes)
