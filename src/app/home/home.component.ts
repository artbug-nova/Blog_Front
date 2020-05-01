import { Component, OnInit, Injectable } from '@angular/core';
import { servicePost } from '../service/postservice';
import { Post } from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[servicePost]
})


export class HomeComponent implements OnInit {


  constructor(private serv:servicePost) { 
  }

  ngOnInit(): void {
    this.onLoadData();
  }

  posts: Post[] = [];


  data1:any = null;
  count: number = 1;
  name:string = "Kate";
  increase(event:any): void{
    console.log(event);
    this.count++;
    alert(this.name);
  }


  onChanged(increased:any){
    increased == true? this.count++:this.count--;
  }

   onLoadData(){
    this.serv.getData("api/post/all").subscribe((arg:Post[]) => {
      this.posts = arg;
      console.log(this.posts);
    });
    ;
  }
}