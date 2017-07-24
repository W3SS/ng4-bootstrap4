import { Component, Input, OnInit } from '@angular/core';

import { BlogPost } from '../../blog-service/blog-post.model';

@Component({
  selector: 'mb-blog-home-two-item',
  templateUrl: './blog-home-two-item.component.html',
  styleUrls: ['./blog-home-two-item.component.css']
})
export class BlogHomeTwoItemComponent implements OnInit {

  @Input() blogPost: BlogPost;
  @Input() blogPostId: number;

  constructor() { }

  ngOnInit() {
  }

}
