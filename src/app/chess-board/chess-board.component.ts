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
  public cellIDX: number = 0;

  public dataForSpecialRow: any = {
    letters: ['A', 'B', 'C', 'D', 'E','F', 'G', 'H'],
    numbers: [8, 7, 6, 5, 4, 3, 2, 1]
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
        indexOfCell: this.cellIDX,
        className: `cell ${this.isCellBlack ? 'black' : 'white'}`
      };      

      rowArray.push(cell);
      
      if(i < 7){
        this.toogleCellClass();
      }

      this.cellIDX += 1;
    }

    return rowArray;
  }

  public getIndexOfCell(){
    return
  }
  
  public toogleCellClass(){
    this.isCellBlack = !this.isCellBlack;
  }

  constructor(
    public chessmenService: ChessmenService
  ){}
}
