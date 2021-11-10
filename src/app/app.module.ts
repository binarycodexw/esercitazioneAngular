import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { DettagliprodottoComponent } from './dettagliprodotto/dettagliprodotto.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    CardContainerComponent,
    CardComponent,
    DettagliprodottoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
