import { Component, OnInit } from '@angular/core';

import { Portfolio } from '../../home/portfolio-section/portfolio.model';
import { PortfolioService } from '../../home/portfolio-section/portfolio.service';

@Component({
  selector: 'mb-four-column-portfolio',
  templateUrl: './four-column-portfolio.component.html',
  styleUrls: ['./four-column-portfolio.component.css']
})
export class FourColumnPortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getPortfolios();
  }

}
