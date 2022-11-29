import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplecalculator',
  templateUrl: './simplecalculator.component.html',
  styleUrls: ['./simplecalculator.component.css']
})
export class SimplecalculatorComponent implements OnInit {
num1:number|any
num2:number|any
operator: string|any
calculate:number|any

  constructor() { }

  ngOnInit(): void {
  }
  Cal():void{

    if(this.operator=='+'){

      this.calculate=parseInt(this.num1) + parseInt(this.num2);

    }

    else if(this.operator=='-'){

      this.calculate=(this.num1 - this.num2);

    }

    else if(this.operator=='*'){

      this.calculate=(this.num1 * this.num2);

    }

    else if(this.operator=='/'){

      this.calculate=(this.num1 / this.num2);

    }

    else {

      this.calculate="Please enter proper operator";

    }

  }




}
