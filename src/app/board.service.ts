import { Injectable } from '@angular/core';
import { Boards } from './boards/boards';
import { BOARDS } from './boards/board-data';

@Injectable()
export class BoardService {

  constructor() { }

  getBoards(): Boards[] {
    return BOARDS;
  }

}
