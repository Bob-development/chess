import { Injectable } from '@angular/core';
import { chessPiecesBlack, chessPiecesWhite} from "../enums";
import { MoveOfChessPiecesService } from "./move-of-chess-pieces.service";

@Injectable({
  providedIn: 'root'
})

export class ChessmenService {
  private movedChessPiecesData: object[] = [];
  public chosenChessPiece: any = null;

  constructor(
    public moveOfChessPiecesService: MoveOfChessPiecesService
  ) {}

  public getMovedChessPiecesData(){
    return this.movedChessPiecesData;
  }

  private addDataAboutMovedChessPiece(data: object){
    this.movedChessPiecesData.push(data);
  }

  public moveChessPieceToEmptyCell(cell: any, idx: number){    
    if(cell.children.length === 0 && this.chosenChessPiece !== null){
      const movedChessPiece = {
        movedChessPieceIndex: idx,
        src: this.chosenChessPiece.src
      };

      this.addDataAboutMovedChessPiece(movedChessPiece);

      const cellNode = this.chosenChessPiece.parentElement.parentElement;
      const chessWrapper = this.chosenChessPiece.parentElement;
      cellNode.removeChild(chessWrapper);
 
      this.chosenChessPiece = null;
    } 
  }

  public getBlackChessPieceEvent(chessPiece: HTMLImageElement, cellIndex: number){
    return (() => {
      this.chessPieceClassNameHandler(chessPiece);
      
      switch (chessPiece.src) {
        case 'http://localhost:4200/assets/blackChessPiecesPng/black-pawn.png':
          console.log('black pawn');
          

          this.moveOfChessPiecesService.getMoveOfblackPawn()
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-rook.png':
          console.log('black rook');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-knight.png':
          console.log('black knight');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-bishop.png':
          console.log('black bishop');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-queen.png':
          console.log('black queen');
          break;

        case 'http://localhost:4200/assets/blackChessPiecesPng/black-king.png':
          console.log('black king');
          break;
      
        default:
          break;
      }
      
    })()
  }

  public getWhiteChessPieceEvent(chessPiece: HTMLImageElement){
    return (() => {
      this.chessPieceClassNameHandler(chessPiece);
      
      
      switch (chessPiece.src) {
        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-pawn.png':
          console.log('white pawn');
          

          this.moveOfChessPiecesService.getMoveOfblackPawn()
          break;

        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-rook.png':
          console.log('white rook');
          break;

        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-knight.png':
          console.log('white knight');
          break;

        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-bishop.png':
          console.log('white bishop');
          break;

        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-queen.png':
          console.log('white queen');
          break;

        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-king.png':
          console.log('white king');
          break;
      
        default:
          break;
      }
      
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
