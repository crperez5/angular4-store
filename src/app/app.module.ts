import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { clock, people } from "./reducers";
import { FormsModule } from "@angular/forms";
import { ClockComponent } from "./clock/clock.component";

@NgModule({
  declarations: [AppComponent, ClockComponent],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.provideStore({ clock, people })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
