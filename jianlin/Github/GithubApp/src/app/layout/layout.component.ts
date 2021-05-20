import {Component, Input, OnInit} from '@angular/core';

export interface toolItems {
  path: string;
  title: string;
  icon: string;
}
export interface toolBar {
  logo: {
    path:string;
    title:string;
  };
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {


  constructor() { }

  toolButtons: toolItems[]=[
    {
      path:'/Login',
      title:'GitHub',
      icon:'login'
    }
  ];
  toolBar:toolBar={
    logo:{
      path:'/Index',
      title:'My App'
    }
  }

  ngOnInit(): void {
  }



}
