import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { KingComponent } from './chessPieces/king/king.component';
import { QueenComponent } from './chessPieces/queen/queen.component';
import { BishopComponent } from './chessPieces/bishop/bishop.component';
import { KnightComponent } from './chessPieces/knight/knight.component';
import { RookComponent } from './chessPieces/rook/rook.component';
import { PawnComponent } from './chessPieces/pawn/pawn.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    KingComponent,
    QueenComponent,
    BishopComponent,
    KnightComponent,
    RookComponent,
    PawnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
