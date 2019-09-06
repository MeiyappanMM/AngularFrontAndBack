import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService:PostService) { }

  @Output() sentPost:EventEmitter<Post> =
            new EventEmitter<Post>();

  ngOnInit() {
  }

  addPost(title,body){
    if(!title || !body )
    {
      alert('Enter your Post');
    }
    else{
      this.postService.savePost({title,body} as Post).subscribe(
        post=>{
          this.sentPost.emit(post);
        });
    }
  }

}
