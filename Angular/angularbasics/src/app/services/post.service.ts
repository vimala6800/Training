import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Posts} from '../models/Posts';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string="https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient:HttpClient) { }

  getPosts()
  {
    console.log("TodoService:getPosts")
    return this.httpClient.get<Posts[]>(this.url)
  }
  addPost(data:Posts):Observable<Posts>{
    console.log("PostService:addPost")
    return this.httpClient.post<Posts>(this.url,data,httpOptions)
  }
}
