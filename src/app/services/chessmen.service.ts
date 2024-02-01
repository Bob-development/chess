import { Injectable } from '@angular/core';
import { chessPiecesBlack, chessPiecesWhite} from "../enums";
import { MoveOfChessPiecesService } from "./move-of-chess-pieces.service";

@Injectable({
  providedIn: 'root'
})

export class ChessmenService {
  public chosenChessPiece: HTMLElement = null;
  // public chosenCell: HTMLElement = null;

  constructor(
    public moveOfChessPiecesService: MoveOfChessPiecesService
  ) {}

  public isEmptyCell(cell: any){
    // console.log(this.chosenChessPiece.parentElement);
    
    if(cell.children.length === 0 && this.chosenChessPiece !== null){
      this.chosenChessPiece.parentNode.removeChild(this.chosenChessPiece)
      this.chosenChessPiece = null;
    }
  }

  public getBlackChessPieceEvent(chessPiece: HTMLImageElement, cellIndex: number){
    return (() => {
      this.chessPieceClassNameHandler(chessPiece);
      
      switch (chessPiece.src) {
        case 'http://localhost:4200/assets/blackChessPiecesPng/black-pawn.png':
          console.log('pawn');
          

          this.moveOfChessPiecesService.getMoveOfblackPawn()
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-rook.png':
          console.log('rook');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-knight.png':
          console.log('knight');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-bishop.png':
          console.log('bishop');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-queen.png':
          console.log('queen');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-king.png':
          console.log('king');
          break;
      
        default:
          break;
      }
      
    })()
  }

  public moveOfBlackPawn(){}

  public getWhiteChessPieceEvent(chessPiece: HTMLImageElement){
    return (() => {
      // chessPiece.parentElement.textContent = ''
    })()
  }

  public chessPieceClassNameHandler(chessPiece: HTMLImageElement){
    if(this.chosenChessPiece){
      this.chosenChessPiece.className = String(chessPiece.className.split(' ').filter(className => className !== 'chosenPiece'))
      this.chosenChessPiece = null;
    }

    if(!chessPiece.className.includes('chosenPiece')){
      chessPiece.className += ' chosenPiece';
      this.chosenChessPiece = chessPiece;
    }
  }

  public getOrderOfBlackFigures(){
    return [
      chessPiecesBlack.rookURL,
      chessPiecesBlack.knightURL,
      chessPiecesBlack.bishopURL,
      chessPiecesBlack.queenURL,
      chessPiecesBlack.kingURL,
      chessPiecesBlack.bishopURL,
      chessPiecesBlack.knightURL,
      chessPiecesBlack.rookURL,
      
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL,
      chessPiecesBlack.pawnURL
    ]
  }

  public getOrderOfWhiteFigures(){
    return [
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,
      chessPiecesWhite.pawnURL,

      chessPiecesWhite.rookURL,
      chessPiecesWhite.knightURL,
      chessPiecesWhite.bishopURL,
      chessPiecesWhite.queenURL,
      chessPiecesWhite.kingURL,
      chessPiecesWhite.bishopURL,
      chessPiecesWhite.knightURL,
      chessPiecesWhite.rookURL
    ]
  }
}
