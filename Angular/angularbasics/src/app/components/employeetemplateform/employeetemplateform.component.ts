import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employeetemplateform',
  templateUrl: './employeetemplateform.component.html',
  styleUrls: ['./employeetemplateform.component.css']
})
export class EmployeetemplateformComponent implements OnInit {
  regEmp:any[]=[]
  display: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  register(data:NgForm):void{

    console.log('register')

    console.log(data.value)

    console.log('Name: ' +data.value.name)

    console.log('Name:using control ' +data.controls['name'].value)

    this.regEmp.push(data.value)

  }

  clear(data:NgForm):void{

    data.resetForm()

  }

  edit(data:NgForm):void{

    this.display=true;

  }
  onDelete(id:any):void{

    for(let i=1;i<this.regEmp.length;++i)

    {

       if(this.regEmp[i].code===id){

        this.regEmp.splice(i,1);

       }

    }

     

   }

 
}
