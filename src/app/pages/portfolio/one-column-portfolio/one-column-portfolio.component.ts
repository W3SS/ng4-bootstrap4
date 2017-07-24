import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Portfolio } from '../../home/portfolio-section/portfolio.model';
import { PortfolioService } from '../../home/portfolio-section/portfolio.service';

@Component({
  selector: 'mb-first-column-portfolio',
  templateUrl: './one-column-portfolio.component.html',
  styleUrls: ['./one-column-portfolio.component.css']
})
export class OneColumnPortfolioComponent implements OnInit, OnDestroy {

  portfolios: Portfolio[];
  page: number;
  paramsSubscription: Subscription;

  constructor(
              private route: ActivatedRoute,
              private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.page = +params['page'];
          this.portfolios = this.portfolioService.getPagePortfolios(this.page);
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }



}
