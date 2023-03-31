import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {AddNewMovieComponent} from './components/add-new-movie/add-new-movie.component';
import {MovieItemDetailsComponent} from './components/movie-item-details/movie-item-details.component';
import {HighLightDirective} from './directives/highlight.directive';
import {ShowAddNewFormDirective} from './directives/show-add-new-form.directive';
import {UsersComponent} from './components/users/users.component';
import {HomeComponent} from './components/home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UserComponent} from './components/user/user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {MoviesComponent} from './components/movies/movies.component';
import {TvShowsComponent} from './components/tv-shows/tv-shows.component';
import {AddNewMovieDialogComponent} from './components/movies/dialog/add-new-movie-dialog.component';
import {AddNewUserComponent} from './components/add-new-user/add-new-user.component';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ActorsEffects} from './services/stores/actors-store/actors.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {UserService} from './services/user.service';

import * as fromAppReducer from './core/stores/app.reducer';
import * as actorEffects from './services/stores/actors-store/actors.effects';
import {MoviesEffects} from './services/stores/movies-store/movies.effects';


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
    EditUserComponent,
    MoviesComponent,
    TvShowsComponent,
    AddNewMovieDialogComponent,
    AddNewUserComponent
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
    MatMenuModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule,
    CoreModule,
    StoreModule.forRoot(fromAppReducer.appReducer),
    EffectsModule.forRoot(MoviesEffects),
    StoreDevtoolsModule.instrument({maxAge: 25, autoPause: true, logOnly: environment.production})
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
