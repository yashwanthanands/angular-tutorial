import { Component, OnInit } from '@angular/core';

@Component({
  //app-servers as element style
  selector: 'app-servers',
  
  //app-servers as attribute style
  // selector: '[app-servers]',
  
  //app-servers as class style
  //selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName ='';
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created . Name is ' + this.serverName;
    return this.serverCreationStatus;
  }

  onUpdateServerName(event : any) {
    this.serverName = event.target.value;
  }

  ngOnInit(): void {
  }

}
