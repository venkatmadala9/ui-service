import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { BoardUserComponent } from '../boarduser/board-user.component';
import { BoardModeratorComponent } from '../boardmoderator/board-moderator.component';
import { BoardAdminComponent } from '../boardadmin/board-admin.component';
import { HotelComponent } from '../hotel/hotel.component';
 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'hotel', component: HotelComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }