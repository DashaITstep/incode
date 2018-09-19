import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ClientDetailsComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
