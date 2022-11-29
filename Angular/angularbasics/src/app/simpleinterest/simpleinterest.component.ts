import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent implements OnInit {
  principle:number|any
  rate:number|any
  time:number|any
  si:number|any

  constructor() { }

  ngOnInit(): void {
  }
  Calculate():void{
    this.si=(this.principle*this.rate*this.time)/100;
  }

}
