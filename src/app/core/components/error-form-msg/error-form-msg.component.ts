import {Component, Input, OnInit} from '@angular/core';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-error-form-msg',
  templateUrl: './error-form-msg.component.html',
  styleUrls: ['./error-form-msg.component.scss']
})
export class ErrorFormMsgComponent implements OnInit {
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
    debugger;
    console.log('show error');
  }

}
