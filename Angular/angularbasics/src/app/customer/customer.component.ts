import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers:Customer[]=[]
  constructor() { }

  ngOnInit(): void {
    this.customers=[
      {
        id:1,
        name:'seetha',
        email:'seetha@gmail.com',
        mobile:8217704875,
        location:'Banglore'

      },
      {
        id:2,
        name:'Sai',
        email:'Sai@gmail.com',
        mobile:7411003159,
        location:'chennai'
      },
      {
        id:3,
        name:'Raju',
        email:'Raju@gmail.com',
        mobile:8653665785,
        location:'vizag'
      },
    ]
  }


}
