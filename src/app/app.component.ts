import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/map";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/withLatestFrom";
import { Store } from "@ngrx/store";
import {
  SecondIncreased,
  HourIncreased,
  PersonIncreased,
  PersonReset
} from "./actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  resetPerson$ = new Subject();

  person$ = new Subject().map((person: string) => {
    let action = PersonIncreased;
    action.payload = person;
    return action;
  });

  click$ = new Subject().map((value: number) => {
    let action = HourIncreased;
    action.payload = value;
    return action;
  });
  second$ = Observable.interval(1000).mapTo(SecondIncreased);
  time;
  people;

  constructor(store: Store<any>) {
    this.time = store.select("clock");
    this.people = store.select("people");
    Observable.merge(
      this.click$,
      this.second$,
      this.person$,
      this.resetPerson$
        .withLatestFrom(this.time, (x: any, y: any) => {
          return { name: x.name, time: y };
        })
        .map((person: any) => {
          let action = PersonReset;
          action.payload = person;
          return action;
        })
    ).subscribe(store.dispatch.bind(store));
  }
}
