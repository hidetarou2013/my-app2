import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { HeroService } from './hero.service';
import { AppComponent }   from './app.component';
import { CustomModal } from './custom-modal-sample';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule
    , ModalModule.forRoot()
    , BootstrapModalModule
    , InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })]
  , declarations: [ AppComponent, CustomModal ]
  , bootstrap: [ AppComponent ]
  , providers: [ HeroService ]
  , entryComponents: [ CustomModal ]
})
export class AppModule { }
