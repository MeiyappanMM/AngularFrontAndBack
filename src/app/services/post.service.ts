import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from 
'@angular/common/http';
import { Observable } from 'rxjs/Observable';


import { Post } from '../models/Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  posturl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private htttp: HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.htttp.get<Post[]>(this.posturl);
  }

}
