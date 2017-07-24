import { Component, Input, OnInit } from '@angular/core';

import { BlogPost } from '../../blog-service/blog-post.model';

@Component({
  selector: 'mb-blog-home-one-item',
  templateUrl: './blog-home-one-item.component.html',
  styleUrls: ['./blog-home-one-item.component.css']
})
export class BlogHomeOneItemComponent implements OnInit {

  @Input() blogPost: BlogPost;
  @Input() blogPostId: number;

  constructor() { }

  ngOnInit() {
  }

}
