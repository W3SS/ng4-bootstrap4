import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Data } from '@angular/router';

import { BlogPost } from '../blog-service/blog-post.model';

@Component({
  selector: 'mb-blog-home-two',
  templateUrl: './blog-home-two.component.html',
  styleUrls: ['./blog-home-two.component.css']
})
export class BlogHomeTwoComponent implements OnInit, OnDestroy {

  blogPosts: BlogPost[];
  resolveSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.resolveSubscription = this.route.data
      .subscribe(
        (data: Data) => {
          this.blogPosts = data['blogPost']
        }
      );
  }

  ngOnDestroy() {
    this.resolveSubscription.unsubscribe();
  }

}
