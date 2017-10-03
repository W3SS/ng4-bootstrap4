import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageHeaderComponent } from './pages/page-header/page-header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CollapseDirective } from './shared/collapse.directive';
import { BsDropdownModule, CarouselModule, PaginationModule } from 'ngx-bootstrap';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ServiceItemComponent } from './pages/services/service-item/service-item.component';
import { AboutMemberComponent } from './pages/about/about-member/about-member.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { HighlightDirective } from './shared/highlight.directive';
import { routingBlogComponents } from './pages/blog/blog-routing.module';
import { routingPortfolioComponents } from './pages/portfolio/portfolio-routing.module';
import { routingAuthComponents } from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    routingBlogComponents,
    routingPortfolioComponents,
    routingAuthComponents,
    PageHeaderComponent,
    DropdownDirective,
    CollapseDirective,
    CarouselComponent,
    ServiceItemComponent,
    AboutMemberComponent,
    PaginationComponent,
    HighlightDirective,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
