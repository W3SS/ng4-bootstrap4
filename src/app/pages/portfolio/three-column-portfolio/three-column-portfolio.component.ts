import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../../home/portfolio-section/portfolio.service';
import { Portfolio } from '../../home/portfolio-section/portfolio.model';

@Component({
  selector: 'mb-three-column-portfolio',
  templateUrl: './three-column-portfolio.component.html',
  styleUrls: ['./three-column-portfolio.component.css']
})
export class ThreeColumnPortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolios = this.portfolioService.getPortfolios();
  }

}
