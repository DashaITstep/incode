import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import {GetClientsService} from "./shared/get-clients.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./shared/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ClientDetailsComponent,
    ClientsListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [GetClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
