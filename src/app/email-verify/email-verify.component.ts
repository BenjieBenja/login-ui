import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  // email = new FormControl('', [Validators.required, Validators.email]);
  // tslint:disable-next-line:member-ordering
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email])
  });
  onSubmit() {

  }
  getErrorMessage() {
    return this.form.get('email').hasError('required') ? 'You must enter a value' :
    this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }
}
