import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardDetailComponent } from './boards/board-detail/board-detail.component';
import { BoardService } from './board.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
