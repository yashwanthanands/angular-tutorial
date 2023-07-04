import { Component, OnInit } from '@angular/core';

@Component({
  //app-servers as element style
  selector: 'app-servers',
  
  //app-servers as attribute style
  // selector: '[app-servers]',
  
  //app-servers as class style
  //selector: '.app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
