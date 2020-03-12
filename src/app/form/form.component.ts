import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../employee-data.ts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model = new EmployeeData(123,"Aditya",10000,"Sales");
  constructor() { }

  ngOnInit() {
  }

}