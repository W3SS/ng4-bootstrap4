import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { PortfolioService } from '../../pages/home/portfolio-section/portfolio.service';


@Component({
  selector: 'mb-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  totalItems: number;
  currentPage: number;
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private portfolioService: PortfolioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.currentPage = +params['page']
        }
      );
    this.totalItems = this.portfolioService.getPortfolios().length;
  }

  pageChanged(event: any) {
    const urlPath = this.route.snapshot.url[0].path;
    const project = this.route.snapshot.queryParams['project'];
    if (urlPath === 'portfolio-item') {
      this.router.navigate([urlPath, 'page', event.page], {queryParams: {project: project}});
    } else {
      this.router.navigate([urlPath, 'page', event.page]);
    }
    window.scrollTo(0, 0)
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
