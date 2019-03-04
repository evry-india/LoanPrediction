import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent  {
  title = 'LoanPrediction';
  loadTransactionInfo = false;
  
  @Input() public mapType: string = 'ROADMAP';	
	@Input() public multiplePlaces: boolean = false;
	@Output() public mapClick: EventEmitter<any> = new EventEmitter();
	@Output() public markerClick: EventEmitter<any> = new EventEmitter();
  @Output() public locationSelected: EventEmitter<any> = new EventEmitter(); 
  constructor() { }
}
