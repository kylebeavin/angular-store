import { Component, OnInit, Input } from '@angular/core';
import { Boards } from '../boards';

@Component({
  selector: 'detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  @Input() boards: Boards;

  constructor() { }

  ngOnInit() {
  }

}
