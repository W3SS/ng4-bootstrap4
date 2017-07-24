import { Component, Input } from '@angular/core';

@Component({
  selector: 'mb-blog-reply',
  templateUrl: './blog-reply.component.html',
  styleUrls: ['./blog-reply.component.css']
})
export class BlogReplyComponent {

  @Input() reply;
  @Input() replyDate;
  @Input() displayReplyName: string;

}
