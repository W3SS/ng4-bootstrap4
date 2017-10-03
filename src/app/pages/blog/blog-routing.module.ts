import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogResolver } from './blog-service/blog-resolver.service';
import { BlogPostItemComponent } from './blog-post/blog-post-item/blog-post-item.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogHomeTwoComponent } from './blog-home-two/blog-home-two.component';
import { BlogHomeOneComponent } from './blog-home-one/blog-home-one.component';

const BlogRoutes: Routes = [
  { path: 'blog-home-one', component: BlogHomeOneComponent, resolve: {blogPost: BlogResolver} },
  { path: 'blog-home-two', component: BlogHomeTwoComponent, resolve: {blogPost: BlogResolver} },
  { path: 'blog-post', component: BlogPostComponent, children: [
    { path: ':id', component: BlogPostItemComponent, resolve: {blogPost: BlogResolver} }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(BlogRoutes)],
  exports: [RouterModule],
  providers: [BlogResolver]
})

export class BlogRoutingModule {}
