import { Component, Input, OnInit } from '@angular/core';

import { Portfolio } from '../../home/portfolio-section/portfolio.model';
import { PortfolioService } from '../../home/portfolio-section/portfolio.service';

@Component({
  selector: 'mb-two-column-portfolio',
  templateUrl: './two-column-portfolio.component.html',
  styleUrls: ['./two-column-portfolio.component.css']
})
export class TwoColumnPortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getPortfolios();
  }

}
