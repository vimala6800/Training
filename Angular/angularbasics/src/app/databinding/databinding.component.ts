import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  disable:boolean=false

  name:string='vimala'
  constructor() { }

  ngOnInit(): void {
  }

}