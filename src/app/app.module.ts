import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DropdownDirective } from './shared/dropdown.directive';
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
import { CollapseDirective } from './shared/collapse.directive';
import { BsDropdownModule, CarouselModule, PaginationModule } from 'ngx-bootstrap';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { PortfolioSectionComponent } from './pages/home/portfolio-section/portfolio-section.component';
import { PortfolioService } from './pages/home/portfolio-section/portfolio.service';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ServiceItemComponent } from './pages/services/service-item/service-item.component';
import { ServicesService } from './pages/services/services.service';
import { AboutMemberComponent } from './pages/about/about-member/about-member.component';
import { AboutService } from './pages/about/about.service';
import { OneColumnPortfolioItemComponent } from './pages/portfolio/one-column-portfolio/one-column-portfolio-item/one-column-portfolio-item.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { AuthService } from './shared/guard/auth-service.service';
import { AuthGuard } from './shared/guard/auth-guard.service';
import { HighlightDirective } from './shared/highlight.directive';
import { BlogHomeOneItemComponent } from './pages/blog/blog-home-one/blog-home-one-item/blog-home-one-item.component';
import { BlogHomeTwoItemComponent } from './pages/blog/blog-home-two/blog-home-two-item/blog-home-two-item.component';
import { BlogPostItemComponent } from './pages/blog/blog-post/blog-post-item/blog-post-item.component';
import { BlogWidgetComponent } from './pages/blog/blog-widget/blog-widget.component';
import { BlogService } from './pages/blog/blog-service/blog-service.service';
import { BlogResolver } from './pages/blog/blog-service/blog-resolver.service';
import { BlogCommentComponent } from './pages/blog/blog-post/blog-comment/blog-comment.component';
import { BlogReplyComponent } from './pages/blog/blog-post/blog-reply/blog-reply.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthUserService } from './auth/auth-user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageHeaderComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
    DropdownDirective,
    OneColumnPortfolioComponent,
    TwoColumnPortfolioComponent,
    ThreeColumnPortfolioComponent,
    FourColumnPortfolioComponent,
    SinglePortfolioItemComponent,
    BlogHomeOneComponent,
    BlogHomeTwoComponent,
    BlogPostComponent,
    FullWidthPageComponent,
    SidebarPageComponent,
    FaqComponent,
    PageNotFoundComponent,
    PricingTableComponent,
    CollapseDirective,
    CarouselComponent,
    PortfolioSectionComponent,
    ServiceItemComponent,
    AboutMemberComponent,
    OneColumnPortfolioItemComponent,
    PaginationComponent,
    HighlightDirective,
    BlogHomeOneItemComponent,
    BlogHomeTwoItemComponent,
    BlogPostItemComponent,
    BlogWidgetComponent,
    BlogCommentComponent,
    BlogReplyComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2PageScrollModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [PortfolioService, ServicesService, AboutService, AuthService, AuthGuard, BlogService, BlogResolver, AuthUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
