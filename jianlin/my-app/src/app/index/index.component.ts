import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(

  ) {

  }

  NewsData={
    Message:null
  };
  RepairStatus={
    Status:null,
    RepairTitle:null,
    RepairTime:null,
    RepairAddr:null,
  };
  Meet=[];
  ngOnInit(): void {
    this.NewsData.Message='垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線垃圾車路線';
    this.RepairStatus.Status='已回報';
    this.RepairStatus.RepairTitle='水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺失水溝蓋遺';
    this.RepairStatus.RepairTime='2021/02/03';
    this.RepairStatus.RepairAddr='台南市永康區崑大路 195 號';
    for (let i=1 ; i<=5  ;i++){
      this.Meet.push({
        Time:'11:00',
        Title:'會議名稱'+i
      })
    }
    console.log('RepairStatus',this.RepairStatus)
    console.log('Meet',this.Meet)

  }


}
