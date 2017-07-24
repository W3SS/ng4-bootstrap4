import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUserService } from '../auth-user-service.service';

@Component({
  selector: 'mb-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authUserService: AuthUserService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authUserService.signinUser(email, password)
  }

}
