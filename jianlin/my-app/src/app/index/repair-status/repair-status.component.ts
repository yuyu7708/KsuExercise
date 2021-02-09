import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repair-status',
  templateUrl: './repair-status.component.html',
  styleUrls: ['./repair-status.component.css']
})
export class RepairStatusComponent implements OnInit {

  constructor() { }
  @Input() RepairStatusData:{} | undefined;

  InputData=null;
  ngOnInit(): void {
    this.InputData=this.RepairStatusData;
    console.log(this.InputData)
  }

}
