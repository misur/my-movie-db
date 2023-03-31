import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {AuthGuardService} from './core/services/auth-guard.service';
import {MoviesComponent} from './components/movies/movies.component';
import {TvShowsComponent} from './components/tv-shows/tv-shows.component';
import {LoginComponent} from './core/components/login/login.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'tv-shows', component: TvShowsComponent, canActivate: [AuthGuardService]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuardService]},
  {path: 'users/:id', component: UserComponent},
  {path: 'users/:id/edit', component: EditUserComponent, canActivate: [AuthGuardService]},
  {path: 'actors', loadChildren: () => import('./modules/actors/actors.module').then( a => a.ActorsModule)},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
