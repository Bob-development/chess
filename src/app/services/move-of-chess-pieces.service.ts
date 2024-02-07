import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveOfChessPiecesService {
  private indexesToMoveChessPiece: number[] = [];

  constructor() {}

  public getMoveOfChessPieces(chessPiece: HTMLImageElement, indexOfChessPieceCell: number, cell: HTMLDivElement){    
    if(chessPiece){
      switch (chessPiece.src) {
        //CASES FOR BLACK CHESS PIECES
        case 'http://localhost:4200/assets/blackChessPiecesPng/black-pawn.png':
          console.log('black pawn');
          
          if(cell.children.length !== 0){
            if(indexOfChessPieceCell > 15){
              this.deleteDataFromArrIndexes();
  
              this.indexesToMoveChessPiece = [indexOfChessPieceCell + 8];
            } else this.indexesToMoveChessPiece = [indexOfChessPieceCell + 8, indexOfChessPieceCell + 16];
          }

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
  
        //CASES FOR WHITE CHESS PIECES
        case 'http://localhost:4200/assets/whiteChessPiecesPng/white-pawn.png':
            console.log('white pawn');

            if(cell.children.length !== 0){
              if(indexOfChessPieceCell < 47){
                this.deleteDataFromArrIndexes();
    
                this.indexesToMoveChessPiece = [indexOfChessPieceCell - 8];
              } else this.indexesToMoveChessPiece = [indexOfChessPieceCell - 8, indexOfChessPieceCell - 16];
            }
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
    }
  }

  public deleteDataFromArrIndexes(){
    this.indexesToMoveChessPiece.length = 0;
  }

  public changeLengthFromArrIndexes(length: number){
    this.indexesToMoveChessPiece.length = length;
  }

  public getIndexesToMoveChessPiece(){
    return this.indexesToMoveChessPiece;
  }
}
