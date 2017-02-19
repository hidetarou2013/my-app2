import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  template: `
  <h2>Custom Modal example:</h2>
  <button (click)="openCustom()">Custom Modal</button>
  `,
  providers: [Modal]
})
export class HeroSearchComponent {
  constructor(public modal: Modal) {}
  openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
}

export class CustomModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

  /**
   * A Sample of how simple it is to create a new window, with its own injects.
   */
  @Component({
    selector: 'modal-content',
    styles: [`
          .custom-modal-container {
              padding: 15px;
          }

          .custom-modal-header {
              background-color: #219161;
              color: #fff;
              -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
              -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
              box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
              margin-top: -15px;
              margin-bottom: 40px;
          }
      `],
      templateUrl: 'hero-search.component.html',
      styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
  })
  export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
    context: CustomModalContext;

    public wrongAnswer: boolean;
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    private　nabiplacehold = "コードを入力してください";


    constructor(public dialog: DialogRef<CustomModalContext>
      , private heroSearchService: HeroSearchService
    ) {
      this.context = dialog.context;
      this.wrongAnswer = true;
      dialog.setCloseGuard(this);
    }

    onKeyUp(value) {
      this.wrongAnswer = value != 5;
      this.dialog.close();
    }


    beforeDismiss(): boolean {
      return true;
    }

    beforeClose(): boolean {
      return this.wrongAnswer;
    }
    search(term: string): void {
      // Push a search term into the observable stream.
      this.searchTerms.next(term);
    }

    ngOnInit(): void {
      this.heroes = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
          // return the http search observable
          ? this.heroSearchService.search(term)
          // or the observable of empty heroes if no search term
          : Observable.of<Hero[]>([]))
        .catch(error => {
          // TODO: real error handling
          console.log(`Error in component ... ${error}`);
          return Observable.of<Hero[]>([]);
        });
    }

    gotoDetail(hero: Hero): void {
      let link = ['/detail', hero.id];
    //  this.router.navigate(link);
    }
  }
