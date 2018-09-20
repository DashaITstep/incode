import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../shared/client";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() clientDetails: Client;

  ngOnInit() {}

}
