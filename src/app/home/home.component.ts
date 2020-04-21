import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
}