import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;
  forbiddenUsernameArray = ['misur', 'misur1'];

  constructor() {
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required, Validators.min(4), Validators.max(12), this.forbiddenUsername.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
        password: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(12)])
      }
    );

    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  onSubmit(): void {
    console.log(this.signupForm);
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
