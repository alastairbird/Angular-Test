import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-practical',
  templateUrl: './third-practical.component.html',
  styleUrls: ['./third-practical.component.css']
})
export class ThirdPracticalComponent implements OnInit {

	displayIsVisible:boolean = false;
	timestamps = [];
	timestampID:number = 0;

  constructor() { }

  toggleDisplay() {
  	this.displayIsVisible = !this.displayIsVisible;
  }

  handleTimeStamp(event) {
  	this.timestampID++;
  	console.log(event.timeStamp + " id: " + this.timestampID);
  	this.timestamps.push(event.timeStamp);
  }

  moreThanFiveTimeStamps(){
  	if(this.timestampID > 5){
  		return true;
  	}
  }

  ngOnInit() {
  }

}
