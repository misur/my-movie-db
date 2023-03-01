import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-form-msg',
  templateUrl: './error-form-msg.component.html',
  styleUrls: ['./error-form-msg.component.scss']
})
export class ErrorFormMsgComponent implements OnInit {
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
    console.log('show error');
  }

}
