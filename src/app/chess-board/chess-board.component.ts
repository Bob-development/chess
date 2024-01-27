import { Component } from '@angular/core';
import { ChessmenService } from '../services/chessmen.service';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})

export class ChessBoardComponent {
  public rowLength: number = 8;
  public isCellBlack: boolean = false;

  public dataForSpecialRow: any = {
    letters: ['A', 'B', 'C', 'D', 'E','F', 'G', 'H'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8]
  }

  public chessBoardRows: any[] = [
    this.makeRow(),
    this.makeRow(),
    this.makeRow(),
    this.makeRow(),
    this.makeRow(),
    this.makeRow(),
    this.makeRow(),
    this.makeRow(),
  ]

  public makeRow(){
    const rowArray: object[] = [];

    for(let i = 0; i < this.rowLength; i++){
      const cell = {
        className: `cell ${this.isCellBlack ? 'black' : 'white'}`
      };

      rowArray.push(cell);
      
      if(i < 7){
        this.toogleCellClass();
      }
    }

    return rowArray;
  }
  
  public toogleCellClass(){
    this.isCellBlack = !this.isCellBlack;
  }

  constructor(
    public chessmenService: ChessmenService
  ){}
}
