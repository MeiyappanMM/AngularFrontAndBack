import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;

    });

  }
  onNewPost(post: Post): void {
    console.log(post);
    this.posts.unshift(post);
  }

  editPost(post: Post): void {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post): void {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  }

  deletePost(post: Post) {
    if (confirm(`are you sure?`)) {
      this.postService.deletePost(post).subscribe(() => {
        this.posts = this.posts.filter(obj => {
          return obj !== post;
        });
      });
    }
  }



}
