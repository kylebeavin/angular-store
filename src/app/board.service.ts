import { Injectable } from '@angular/core';
import { Boards } from './boards/boards';
import { BOARDS } from './boards/board-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class BoardService {

  constructor(private messageService: MessageService) { }

  getBoards(): Observable<Boards[]> {
    this.messageService.add('BoardService: fetched boards')
    return of(BOARDS);
  }

}
