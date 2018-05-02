import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardDetailComponent } from './boards/board-detail/board-detail.component';
import { BoardService } from './board.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BoardService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
