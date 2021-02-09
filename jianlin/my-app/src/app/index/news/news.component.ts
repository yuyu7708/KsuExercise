import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
  Message:string;
  @Input() NewsMessage:string | undefined;
  ngOnInit(): void {
    this.NewsMessage?this.Message=this.NewsMessage:this.Message='無訊息'
  }

}
