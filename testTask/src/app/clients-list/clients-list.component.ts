import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetClientsService} from "../shared/get-clients.service";
import {Client} from "../shared/client";

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(private clientService: GetClientsService) { }

  @Output() activeClient = new EventEmitter<Client>();
  @Input() searchText: string;

  public allClients: Client[] = [];

  ngOnInit() {
    this.getAllClients()
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe((clients: Client[])=>{
        this.allClients = clients;
    });
  }

  showDetails(i){
    this.activeClient.emit(this.allClients[i]);
  }
}
