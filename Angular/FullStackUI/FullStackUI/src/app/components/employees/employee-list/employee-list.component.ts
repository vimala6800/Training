import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees:Employee[]=[
  /*{
    id:1,
    name:'vimala',
    email:'vimala@gamil.com',
    phone:8217704875,
    salary:30000,
    department:'IT'
  },
  {
    id:2,
    name:'sai',
    email:'sai@gamil.com',
    phone:7411003159,
    salary:35000,
    department:'Accounts'
  },
  {
    id:3,
    name:'sudha',
    email:'sudha@gamil.com',
    phone:7680801016,
    salary:25000,
    department:'HR'
  },*/
];
  constructor() { }

  ngOnInit(): void {
    
  }

}
