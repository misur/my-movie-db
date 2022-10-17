import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {AuthGuardService} from './core/services/auth-guard.service';
import {MoviesComponent} from './components/movies/movies.component';
import {TvShowsComponent} from './components/tv-shows/tv-shows.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'tv-shows', component: TvShowsComponent },
  {path: 'users', component: UsersComponent },
  {path: 'users/:id', component: UserComponent },
  {path: 'users/:id/edit', component: EditUserComponent, canActivate: [AuthGuardService]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
