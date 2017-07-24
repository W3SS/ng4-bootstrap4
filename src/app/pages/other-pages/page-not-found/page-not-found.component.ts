import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/auth-user-service.service';

@Component({
  selector: 'mb-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public authUserService: AuthUserService) { }

  ngOnInit() {
  }

}
