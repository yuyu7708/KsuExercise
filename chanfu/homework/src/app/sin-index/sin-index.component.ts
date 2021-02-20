import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sin-index',
  templateUrl: './sin-index.component.html',
  styleUrls: ['./sin-index.component.css']
})
export class SinIndexComponent implements OnInit {
  ChageLink= 0;
  constructor() { }

  ngOnInit(): void {
  }
  getChange(data: any){
    if (data.ok){
      this.ChageLink= 1;
    }
  }
}
