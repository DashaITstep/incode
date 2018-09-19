import { Component, OnInit } from '@angular/core';
import {GetClientsService} from "../shared/get-clients.service";
import {Client} from "../shared/client";
import {showWarningOnce} from "tslint/lib/error";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(private clientService: GetClientsService) { }

  public allClients: Client[] = [];
  public activeClient: Client = null;

  ngOnInit() {
    this.getAllClients()
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((clients: Client[])=>{
        this.allClients = clients;
    });
  }

  showDetails(){

  }
}
