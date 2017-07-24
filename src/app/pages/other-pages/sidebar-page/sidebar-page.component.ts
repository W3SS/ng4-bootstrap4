import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../../auth/auth-user-service.service';

@Component({
  selector: 'mb-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.css']
})
export class SidebarPageComponent implements OnInit {

  constructor(public authUserService: AuthUserService) { }

  ngOnInit() {
  }

}
