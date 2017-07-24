import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthUserService } from '../../auth/auth-user-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authUserService: AuthUserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authUserService.isAuthenticated()) {
      return true
    }else {
      alert('You are not logged. Please register or login if you have account.')
      return false
    }
  }

}
