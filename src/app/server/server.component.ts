import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

	serverStatus: string = 'offline';
	serverID: number = 10;

  constructor() { }

  getServerStatus() {
  	return this.serverStatus;
  }

  ngOnInit() {
  }

}
