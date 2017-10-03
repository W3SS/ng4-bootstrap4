import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../shared/guard/auth-guard.service';
import { SinglePortfolioItemComponent } from './single-portfolio-item/single-portfolio-item.component';
import { FourColumnPortfolioComponent } from './four-column-portfolio/four-column-portfolio.component';
import { ThreeColumnPortfolioComponent } from './three-column-portfolio/three-column-portfolio.component';
import { TwoColumnPortfolioComponent } from './two-column-portfolio/two-column-portfolio.component';
import { OneColumnPortfolioComponent } from './one-column-portfolio/one-column-portfolio.component';
import { PortfolioSectionComponent } from '../home/portfolio-section/portfolio-section.component';
import { OneColumnPortfolioItemComponent } from './one-column-portfolio/one-column-portfolio-item/one-column-portfolio-item.component';

const PortfolioRoutes: Routes = [
  { path: 'portfolio-1-col/page/:page', component: OneColumnPortfolioComponent },
  { path: 'portfolio-2-col', component: TwoColumnPortfolioComponent },
  { path: 'portfolio-3-col', component: ThreeColumnPortfolioComponent },
  { path: 'portfolio-4-col', component: FourColumnPortfolioComponent },
  { path: 'portfolio-item/page/:page', component: SinglePortfolioItemComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(PortfolioRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})

export class PortfolioRoutingModule {}

export const routingPortfolioComponents = [
  OneColumnPortfolioComponent,
  TwoColumnPortfolioComponent,
  ThreeColumnPortfolioComponent,
  FourColumnPortfolioComponent,
  SinglePortfolioItemComponent,
  PortfolioSectionComponent,
  OneColumnPortfolioItemComponent,
];
