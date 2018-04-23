import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer: boolean = false;
	serverCreationStatus: string = 'No server was created';
	serverName:string = 'TestServer';

  constructor() { 

  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 200);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = 'Server was created, named: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
