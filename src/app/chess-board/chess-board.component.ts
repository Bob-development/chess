import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {
  public rowLength: number = 8;
  public isCellBlack: boolean = false;
  public rowCounter: number = 1;

  public dataForSpecialRow: any = {
    letters: ['A', 'B', 'C', 'D', 'E','F', 'G', 'H']
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
        number: this.rowCounter,
        className: `cell ${this.isCellBlack ? 'black' : 'white'}`
      };

      rowArray.push(cell);
      
      if(i < 7){
        this.toogleCellClass();
      } else this.rowCounter = this.rowCounter + 1;
    }

    return rowArray;
  }
  
  public toogleCellClass(){
    this.isCellBlack = !this.isCellBlack;
  }

  constructor(){}
}
