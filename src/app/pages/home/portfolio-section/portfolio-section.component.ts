import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Portfolio } from './portfolio.model';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'mb-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  @Input() portfolio: Portfolio;
  @Input() id: number;
  isRouterTrue = false;

  constructor(private portfoliloService: PortfolioService, private router: Router) {
    if (this.router.url !== '/') {
      this.isRouterTrue = !this.isRouterTrue
    }
  }

  ngOnInit() {
  }

  onClickImage() {
    this.portfoliloService.portfolioId.next(this.id)
  }

  onNavigate() {
    this.portfoliloService.getNavigatePortfolio(this.id);
    const page = this.portfoliloService.getNavigationPortfolioValue()[0];
    const project = this.portfoliloService.getNavigationPortfolioValue()[1];
    this.router.navigate(['/portfolio-item', 'page', page], {queryParams: {project: project + 1}})
  }

}
