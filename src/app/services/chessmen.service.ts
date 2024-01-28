import { Injectable } from '@angular/core';
import { chessPiecesBlack, chessPiecesWhite} from "../enums";

@Injectable({
  providedIn: 'root'
})

export class ChessmenService {

  constructor() {}

  getOrderOfBlackFigures(){
    return [
      //figures, append a have written in chess-board.html
    ]
  }
}
