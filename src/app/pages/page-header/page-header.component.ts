import { Component, Input } from '@angular/core';

@Component({
  selector: 'mb-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  @Input() pageActive = '';
  @Input() pageUrlActive = '';

  constructor() { }

}
