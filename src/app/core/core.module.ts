import {NgModule} from '@angular/core';
import {AlertComponent} from './components/alert/alert.component';
import {ErrorFormMsgComponent} from './components/error-form-msg/error-form-msg.component';
import {LoginComponent} from './components/login/login.component';
import {MenuComponent} from './components/menu/menu.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {PlaceholderDirective} from './directives/placeholder.directive';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './interceptors/auth-interceptor.service';
import {ShortenPipe} from './pipes/shorten.pipe';
import {AuthServiceService} from './services/auth-service.service';
import {AuthGuardService} from './services/auth-guard.service';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AlertComponent,
    ErrorFormMsgComponent,
    LoginComponent,
    MenuComponent,
    PageNotFoundComponent,
    PlaceholderDirective,
    ShortenPipe,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatProgressBarModule,
        MatButtonModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    AuthServiceService,
    AuthGuardService,
  ],
  exports: [
    MenuComponent,
    ShortenPipe
  ],
  entryComponents: [AlertComponent]
})
export class CoreModule {

}
