import { Component, Input, OnInit } from '@angular/core';

import { Portfolio } from '../../../home/portfolio-section/portfolio.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mb-one-column-portfolio-item',
  templateUrl: './one-column-portfolio-item.component.html',
  styleUrls: ['./one-column-portfolio-item.component.css']
})
export class OneColumnPortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio;
  @Input() index: number;
  page;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.route.snapshot.params['page'];
  }

  onClicked() {
    console.log('Project = ' + this.index + ' and Page = ' + this.page)
  }

}
