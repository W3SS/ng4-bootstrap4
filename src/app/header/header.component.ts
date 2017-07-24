import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/guard/auth-service.service';
import { Router } from '@angular/router';
import { AuthUserService } from '../auth/auth-user-service.service';

@Component({
  selector: 'mb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = false;

  constructor(private authService: AuthService, private router: Router, public authUserService: AuthUserService) { }

  ngOnInit() {
  }

  toggleState() {
    this.isShow = !this.isShow;
  }

  onLogout() {
    this.authUserService.logout();
    this.router.navigate(['/']);
  }

}
