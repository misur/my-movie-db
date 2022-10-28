import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
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
          console.log(error);
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

}
