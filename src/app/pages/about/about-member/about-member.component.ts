import { Component, Input, OnInit } from '@angular/core';
import { AboutMemeber } from '../about.model';

@Component({
  selector: 'mb-about-member',
  templateUrl: './about-member.component.html',
  styleUrls: ['./about-member.component.css']
})
export class AboutMemberComponent implements OnInit {

  @Input() member: AboutMemeber;

  constructor() { }

  ngOnInit() {
  }

}
