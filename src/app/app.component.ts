import { Component, OnInit } from '@angular/core';
import * as conceptsData from '../assets/ownData.json';

interface DataOwn{
  title: string;
  description: string;
  description2: string;
  image: string;
  keywords: string[];
  example: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit{
  data: any = (conceptsData as any).default;
  indexSel : number = 1;
  selected: DataOwn = {
    title: "",
    description: "",
    description2: "",
    image: "",
    keywords: [],
    example: ""
  }
  constructor() {
    
  }
  ngOnInit(){
     this.selected = this.data[this.indexSel]
  }
  makeThisCurrnt(ind:number){
    this.indexSel = ind;
    this.selected = this.data[ind]
  }
}
