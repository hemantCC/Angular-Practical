import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  color: string;
  AllowNewServer = true;
  ServerCreated = "Server was not Created."
  message = false;
  serverId: number = 50;
  serverStatus: string = 'Online';
  toggle = true;
  Name : string = '';

  constructor() {
    setTimeout(() => {
      this.AllowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {
  }


  getServerStatus() {
    return this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getColor() {
    return this.serverStatus = 'Orange';
  }

  onCreateServer() {
    this.ServerCreated = "Server was Created";
    this.message = true;
  }
  
  onDestroyServer() {
    this.ServerCreated = "Server was Destroyed";
    this.message = true;
  }

  toggleContent(){
    this.toggle = !this.toggle
  }

}
