import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { OneColumnPortfolioComponent } from './pages/portfolio/one-column-portfolio/one-column-portfolio.component';
import { TwoColumnPortfolioComponent } from './pages/portfolio/two-column-portfolio/two-column-portfolio.component';
import { ThreeColumnPortfolioComponent } from './pages/portfolio/three-column-portfolio/three-column-portfolio.component';
import { FourColumnPortfolioComponent } from './pages/portfolio/four-column-portfolio/four-column-portfolio.component';
import { SinglePortfolioItemComponent } from './pages/portfolio/single-portfolio-item/single-portfolio-item.component';
import { BlogHomeOneComponent } from './pages/blog/blog-home-one/blog-home-one.component';
import { BlogHomeTwoComponent } from './pages/blog/blog-home-two/blog-home-two.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';
import { FullWidthPageComponent } from './pages/other-pages/full-width-page/full-width-page.component';
import { SidebarPageComponent } from './pages/other-pages/sidebar-page/sidebar-page.component';
import { FaqComponent } from './pages/other-pages/faq/faq.component';
import { PageNotFoundComponent } from './pages/other-pages/page-not-found/page-not-found.component';
import { PricingTableComponent } from './pages/other-pages/pricing-table/pricing-table.component';
import { AuthGuard } from './shared/guard/auth-guard.service';
import { BlogPostItemComponent } from './pages/blog/blog-post/blog-post-item/blog-post-item.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BlogResolver } from './pages/blog/blog-service/blog-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'portfolio-1-col/page/:page', component: OneColumnPortfolioComponent },
  { path: 'portfolio-2-col', component: TwoColumnPortfolioComponent },
  { path: 'portfolio-3-col', component: ThreeColumnPortfolioComponent },
  { path: 'portfolio-4-col', component: FourColumnPortfolioComponent },
  { path: 'portfolio-item/page/:page', component: SinglePortfolioItemComponent, canActivate: [AuthGuard] },
  { path: 'blog-home-one', component: BlogHomeOneComponent, resolve: {blogPost: BlogResolver} },
  { path: 'blog-home-two', component: BlogHomeTwoComponent, resolve: {blogPost: BlogResolver} },
  { path: 'blog-post', component: BlogPostComponent, children: [
    { path: ':id', component: BlogPostItemComponent, resolve: {blogPost: BlogResolver} }
  ] },
  { path: 'full-width', component: FullWidthPageComponent },
  { path: 'sidebar', component: SidebarPageComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'pricing', component: PricingTableComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
