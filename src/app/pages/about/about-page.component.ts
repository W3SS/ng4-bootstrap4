import { Component, OnInit } from '@angular/core';

import { AboutService } from './about.service';
import { AboutMemeber } from './about.model';

@Component({
  selector: 'mb-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  members: AboutMemeber[];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.members = this.aboutService.getMembers();
  }

}
