import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service'
import { LogService } from '../log.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [DataService, LogService]
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




  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.dataService.getData())
  }

}
