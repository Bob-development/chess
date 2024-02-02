import { Injectable } from '@angular/core';
import { chessPiecesBlack, chessPiecesWhite} from "../enums";
import { MoveOfChessPiecesService } from "./move-of-chess-pieces.service";

@Injectable({
  providedIn: 'root'
})

export class ChessmenService {
  public chosenChessPiece: any = null;
  public chosenCell: any = null;
  public isEmptyCell: boolean = false;
  public a: string;

  constructor(
    public moveOfChessPiecesService: MoveOfChessPiecesService
  ) {}

  public deletingIfEmptyCell(cell: any){
    this.chosenCell = cell;
    console.log(this.chosenCell.indexOfCell);
    

    if(cell.children.length === 0 && this.chosenChessPiece !== null){
      this.isEmptyCell = true;
      this.chosenCell = cell;
      

      const cellNode = this.chosenChessPiece.parentElement.parentElement;
      const chessWrapper = this.chosenChessPiece.parentElement;
      
      cellNode.removeChild(chessWrapper);
      

    } else this.isEmptyCell = false;

    // this.toogle();
  }

  public toogle(){
    const a = this.chosenChessPiece.src;
    
    this.isEmptyCell = false;
    this.chosenChessPiece = null;
    this.chosenCell = null;

    return a;
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

  public getIsEmptyCell(){
    return this.isEmptyCell;
  }

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
