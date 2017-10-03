import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogResolver } from './blog-service/blog-resolver.service';
import { BlogPostItemComponent } from './blog-post/blog-post-item/blog-post-item.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogHomeTwoComponent } from './blog-home-two/blog-home-two.component';
import { BlogHomeOneComponent } from './blog-home-one/blog-home-one.component';
import { AuthGuard } from '../../shared/guard/auth-guard.service';
import { BlogReplyComponent } from './blog-post/blog-reply/blog-reply.component';
import { BlogCommentComponent } from './blog-post/blog-comment/blog-comment.component';
import { BlogWidgetComponent } from './blog-widget/blog-widget.component';
import { BlogHomeTwoItemComponent } from './blog-home-two/blog-home-two-item/blog-home-two-item.component';
import { BlogHomeOneItemComponent } from './blog-home-one/blog-home-one-item/blog-home-one-item.component';

const BlogRoutes: Routes = [
  { path: 'blog-home-one', component: BlogHomeOneComponent, canActivate: [AuthGuard], resolve: {blogPost: BlogResolver} },
  { path: 'blog-home-two', component: BlogHomeTwoComponent, canActivate: [AuthGuard], resolve: {blogPost: BlogResolver} },
  { path: 'blog-post', component: BlogPostComponent, canActivate: [AuthGuard], children: [
    { path: ':id', component: BlogPostItemComponent, canActivate: [AuthGuard], resolve: {blogPost: BlogResolver} }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(BlogRoutes)],
  exports: [RouterModule],
  providers: [BlogResolver, AuthGuard]
})

export class BlogRoutingModule {}

export const routingBlogComponents = [
  BlogHomeOneComponent,
  BlogHomeTwoComponent,
  BlogPostComponent,
  BlogPostItemComponent,
  BlogHomeOneItemComponent,
  BlogHomeTwoItemComponent,
  BlogWidgetComponent,
  BlogCommentComponent,
  BlogReplyComponent
];
