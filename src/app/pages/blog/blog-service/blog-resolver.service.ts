import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { BlogPost } from './blog-post.model';
import { BlogService } from './blog-service.service';

@Injectable()
export class BlogResolver implements Resolve<BlogPost[]> {

  constructor(private blogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost[]> | Promise<BlogPost[]> | BlogPost[] {
    return this.blogService.getBlogData()
  }
}
