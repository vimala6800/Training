import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Posts } from '../../models/Posts';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Posts[]=[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    console.log("PostComponent:ngOnInit") 
    this.postService.getPosts().subscribe(posts=>{
      this.posts=posts
  })
}
  addPost(post:NgForm):void{
    console.log(post.value)
    this.postService.addPost(post.value).subscribe(post=>{
      console.log('add post###')
      console.log(post)
      this.posts.push(post)
    }
      )
  }
}


