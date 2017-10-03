import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Portfolio } from './portfolio-section/portfolio.model';
import { PortfolioService } from './portfolio-section/portfolio.service';
import { ServicesService } from '../services/services.service';
import { Services } from '../services/services.model';
import { BlogService } from '../blog/blog-service/blog-service.service';

@Component({
  selector: 'mb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  portfolios: Portfolio[];
  imagePath: string;
  imageName: string;
  services: Services[];
  subscription: Subscription;

  constructor(
    private portfolioService: PortfolioService,
    private sericesService: ServicesService,
    private blogService: BlogService
  ) {
    this.subscription = this.portfolioService.portfolioId.subscribe(
      (data: number) => {
        this.imagePath = this.portfolioService.getPortfolioImage(data).imagePath;
        this.imageName = this.portfolioService.getPortfolioImage(data).name;
      }
    )
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.services = this.sericesService.getServices();
    this.portfolios = this.portfolioService.getPortfolios()
  }

  onClickedSave() {
    this.blogService.storeBlogData()
      .subscribe(
        data => console.log(data)
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
