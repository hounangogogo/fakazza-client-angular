import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FakazzaPageComponent} from './fakazza-page/fakazza-page.component';



// Path name will be used in RouterLink
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'fakazza', component: FakazzaPageComponent}
];




export const routing = RouterModule.forRoot(appRoutes)
