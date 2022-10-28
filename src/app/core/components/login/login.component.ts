import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  loadingBar = false;

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required, Validators.min(4), Validators.max(12)]),
        password: new FormControl(null, [Validators.required])
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loadingBar = true;
      this.userService.setLoggedUser(this.loginForm.value)
        .subscribe(response => {
          this.router.navigate(['/']);
          this.userService.activeEmitter.next(this.loginForm.value);
          this.loadingBar = false;
        }, error => {
          this.snackBar.open(error.error, 'OK', {
            duration: 3000
          });
          console.log(error);
          this.loadingBar = false;
        });

    }
  }

}
