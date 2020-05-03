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
    //this.onLoadData();
  }



}