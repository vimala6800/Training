import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any=[]
  displaysal:boolean=false
  loaded:boolean=false
  constructor() { }

  ngOnInit(): void {
    this.employees=[
      {
        code:1,
        name:'vimala',
        dept:'IT',
        desg:'SE',
        sal:35000
      },
      {
        code:2,
        name:'suma',
        dept:'HR',
        desg:'Executive',
        sal:45000
      },
      {
        code:3,
        name:'Ilakkiya',
        dept:'Admin',
        desg:'senior Executive',
        sal:40000
      },
    ]
    this.loaded=true
  }

}
