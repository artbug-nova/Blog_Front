import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() 
  userName:string;
  @Input() 
  userAge:number;
  @Output()
  onChanged = new EventEmitter<boolean>();

  change(increased:any){
    this.onChanged.emit(increased);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
