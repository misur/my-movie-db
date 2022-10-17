import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {AddNewMovieComponent} from './components/add-new-movie/add-new-movie.component';
import {MovieItemDetailsComponent} from './components/movie-item-details/movie-item-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {HighLightDirective} from './directives/highlight.directive';
import {ShowAddNewFormDirective} from './directives/show-add-new-form.directive';
import {UserService} from './services/user.service';
import {UsersComponent} from './components/users/users.component';
import {HomeComponent} from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UserComponent} from './components/user/user.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {AuthServiceService} from './core/services/auth-service.service';
import {AuthGuardService} from './core/services/auth-guard.service';
import {MenuComponent} from './core/components/menu/menu.component';
import {MoviesComponent} from './components/movies/movies.component';
import {TvShowsComponent} from './components/tv-shows/tv-shows.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ErrorFormMsgComponent} from './core/components/error-form-msg/error-form-msg.component';
import {MatRadioModule} from '@angular/material/radio';
import {AddNewMovieDialogComponent} from './components/movies/dialog/add-new-movie-dialog.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {ShortenPipe} from './core/pipes/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddNewMovieComponent,
    MovieItemDetailsComponent,
    HighLightDirective,
    ShowAddNewFormDirective,
    UsersComponent,
    HomeComponent,
    UserComponent,
    PageNotFoundComponent,
    EditUserComponent,
    MenuComponent,
    MoviesComponent,
    TvShowsComponent,
    AddNewMovieDialogComponent,
    ErrorFormMsgComponent,
    AddNewUserComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    _MatMenuDirectivesModule,
    MatMenuModule
  ],
  providers: [UserService, AuthServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
