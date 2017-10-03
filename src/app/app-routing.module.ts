import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FullWidthPageComponent } from './pages/other-pages/full-width-page/full-width-page.component';
import { SidebarPageComponent } from './pages/other-pages/sidebar-page/sidebar-page.component';
import { FaqComponent } from './pages/other-pages/faq/faq.component';
import { PageNotFoundComponent } from './pages/other-pages/page-not-found/page-not-found.component';
import { PricingTableComponent } from './pages/other-pages/pricing-table/pricing-table.component';
import { PortfolioRoutingModule } from './pages/portfolio/portfolio-routing.module';
import { BlogRoutingModule } from './pages/blog/blog-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'full-width', component: FullWidthPageComponent },
  { path: 'sidebar', component: SidebarPageComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'pricing', component: PricingTableComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    PortfolioRoutingModule,
    BlogRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
