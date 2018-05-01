import { Component, OnInit } from '@angular/core';
import { BOARDS } from './board-data';
import { Boards } from './boards';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

    boards = BOARDS;

    selectedBoards: Boards;
  
  constructor() { }
  
  ngOnInit() {
    
  }

  onSelect(boards: Boards): void {
    this.selectedBoards = boards;
  }
  
}

