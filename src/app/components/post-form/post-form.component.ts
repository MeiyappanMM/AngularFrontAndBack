import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Output() newPost: EventEmitter<Post> =
    new EventEmitter<Post>();
  @Output() updatedPost: EventEmitter<Post> =
    new EventEmitter<Post>();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Enter your Post');
    }
    else {
      this.postService.savePost({ title, body } as Post).subscribe(
        post => {
          this.newPost.emit(post);
        });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe
      (post => {
        console.log(post);
        this.isEdit = false;
        this.updatedPost.emit(post);
      }
      );
  }

}
