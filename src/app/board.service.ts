import { Injectable } from '@angular/core';
import { Boards } from './boards/boards';
import { BOARDS } from './boards/board-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class BoardService {

  constructor() { }

  getBoards(): Observable<Boards[]> {
    return of(BOARDS);
  }

}
