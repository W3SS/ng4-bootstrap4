import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Portfolio } from '../../home/portfolio-section/portfolio.model';
import { PortfolioService } from '../../home/portfolio-section/portfolio.service';

@Component({
  selector: 'mb-single-portfolio-item',
  templateUrl: './single-portfolio-item.component.html',
  styleUrls: ['./single-portfolio-item.component.css']
})
export class SinglePortfolioItemComponent implements OnInit, OnDestroy {

  portfolios: Portfolio[];
  portfolioDetails: Portfolio;
  page: number;
  paramsSubscription: Subscription;
  queryParamsSubscription: Subscription;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.page = +params['page'];
          this.portfolios = this.portfolioService.getPagePortfolios(this.page);
          const project = this.route.snapshot.queryParams['project'];
          this.portfolioDetails = this.portfolios[project - 1]
        }
      );
    this.queryParamsSubscription = this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.portfolioDetails = this.portfolios[queryParams['project'] - 1];
        }
      );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }

}
