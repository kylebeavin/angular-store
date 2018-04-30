import { Component, OnInit } from '@angular/core';
import { BOARDS } from './board-data';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
    boards = BOARDS;
  
  constructor() { }
  
  ngOnInit() {
    
  }
  
}

