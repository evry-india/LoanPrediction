import { Component, OnInit } from '@angular/core';

export interface PropertyType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.css']
})
export class TransactionInfoComponent{

  constructor() { }
  types: PropertyType[] = [
    {value: 'Single Family', viewValue: 'Single Family'},
    {value: 'Condo', viewValue: 'Condo'},
    {value: 'Dupelex', viewValue: 'Dupelex'}
  ];
}
