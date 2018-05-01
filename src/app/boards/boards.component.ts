import { Component, OnInit } from '@angular/core';
import { BOARDS } from './board-data';
import { Boards } from './boards';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

    boards: Boards[];

    selectedBoards: Boards;
  
  constructor(private boardService: BoardService) { }
  
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(boards: Boards): void {
    this.selectedBoards = boards;
  }

  getHeroes(): void {
    this.boardService.getBoards()
    .subscribe(boards => this.boards = boards);
  }
  
}

