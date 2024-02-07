import { Injectable } from '@angular/core';
import { chessPiecesBlack, chessPiecesWhite} from "../enums";
import { MoveOfChessPiecesService } from "./move-of-chess-pieces.service";

@Injectable({
  providedIn: 'root'
})

export class ChessmenService {
  private movedChessPiecesData: object[] = [];
  public chosenChessPiece: HTMLImageElement = null;

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
    let firstCellChild: HTMLElement;
    
    cell.children.length !== 0 ? firstCellChild = cell.children[0] : null;    

    //GET WAYS TO MOVE PIECE
    this.moveOfChessPiecesService.getMoveOfChessPieces(this.chosenChessPiece, idx, cell);
    
    //CHECK IS EMPTY CELL
    if(cell.children.length !== 0 && firstCellChild.className === 'way-to-move-piece' && this.chosenChessPiece !== null){
      const movedChessPiece = {
        movedChessPieceIndex: idx,
        src: this.chosenChessPiece.src
      };

      this.addDataAboutMovedChessPiece(movedChessPiece);

      const cellNode = this.chosenChessPiece.parentElement.parentElement;
      const chessWrapper = this.chosenChessPiece.parentElement;
      cellNode.removeChild(chessWrapper);
      
      this.moveOfChessPiecesService.deleteDataFromArrIndexes();

      this.chosenChessPiece = null;
    } 
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
