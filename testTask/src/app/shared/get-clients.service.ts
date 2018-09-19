import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Client} from "./client";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class GetClientsService {

  constructor(private http: HttpClient) { }

  public getAllClients(): Observable<Client[]> {
      return this.http.get<Client[]>('assets/clients.json').pipe(map(client=>{
          let clients: Client[] = [];
          for(let i=0; client[i]!=null; i++){
              clients.push(client[i]);
          }
          return clients;
      }));
  }

}
