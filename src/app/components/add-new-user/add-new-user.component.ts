import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlertComponent} from '../../core/components/alert/alert.component';
import {PlaceholderDirective} from '../../core/directives/placeholder.directive';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;
  forbiddenUsernameArray = ['syn', 'syn32'];
  loadingBar = false;
  loggedUser = null;

  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private userService: UserService,
              private snackBar: MatSnackBar,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required, Validators.min(4), Validators.max(12), this.forbiddenUsername.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
        // password: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(12)])
        password: new FormControl(null, [Validators.required])
      }
    );
    this.loggedUser = this.userService.loggedUserObj;

    // this.signupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.loadingBar = true;
      this.userService.createNewUser(this.signupForm.value)
        .subscribe(response => {
          this.loadingBar = false;
          this.signupForm.reset();
          this.signupForm.controls['username'].setErrors(null);
          this.signupForm.controls['email'].setErrors(null);
          this.signupForm.controls['password'].setErrors(null);
          this.signupForm.setErrors(null);
          this.signupForm.markAsUntouched();
          this.snackBar.open('Successfully created user', 'OK', {
            duration: 3000
          });
          this.loadingBar = false;
        }, error => {
          this.loadingBar = false;
          this.showErrorAlert(error);
        });
    }
  }


  forbiddenUsername(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernameArray.includes(control.value)) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value.includes('t-com')) {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

  private showErrorAlert(error: HttpErrorResponse) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const alertComponentComponentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    alertComponentComponentRef.instance.message = error.error;

    this.closeSub = alertComponentComponentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });


  }
}
