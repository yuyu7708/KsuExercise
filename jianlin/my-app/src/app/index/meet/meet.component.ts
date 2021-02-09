import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit {

  constructor() { }
  @Input()MeetData:any;
  MeetLists=[];
  ngOnInit(): void {
    this.MeetLists=this.MeetData
  }

}
