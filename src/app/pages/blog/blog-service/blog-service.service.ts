import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as firebase from 'firebase';

import { BlogComment } from './blog-comment.model';
import { BlogReply } from './blog-reply.model';
import { AuthUserService } from '../../../auth/auth-user-service.service';

@Injectable()
export class BlogService {

  constructor(private http: Http, private authUserService: AuthUserService ) {}

  getBlogData() {
    const token = this.authUserService.getToken();

    return this.http.get('https://mb-angular-b4180.firebaseio.com/blogData.json?auth=' + token)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Error!!! if you want to view type of error change this log.')
        }
      )
  }

  addComment(id: number, blogComment: BlogComment, key: any) {
    firebase.database().ref('blogData/' + id + '/blogComment').child(key).set(
      blogComment
    ).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  addReply(postId: number, id: number, key: any, blogReply: BlogReply) {
    firebase.database().ref('blogData/' + postId + '/blogComment/' + id + '/reply').child(key).set(
      blogReply
    ).then(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
