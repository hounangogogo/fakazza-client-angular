import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FakazzaPageComponent} from './fakazza-page/fakazza-page.component';
import {AdvPageComponent} from './adv-page/adv-page.component';
import {RetrievePasswordComponent} from './retrieve-password/retrieve-password.component';



// Path name will be used in RouterLink
const appRoutes: Routes = [
  {path: '', component: AdvPageComponent},
  {path: 'retrieve-password', component: RetrievePasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'fakazza/:uid/:cid', component: FakazzaPageComponent}
  ];





export const routing = RouterModule.forRoot(appRoutes);

