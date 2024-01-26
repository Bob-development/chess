import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { KingBlackComponent } from './chessPieces/black/king-black/king-black.component';
import { QueenBlackComponent } from './chessPieces/black/queen-black/queen-black.component';
import { BishopBlackComponent } from './bishop-black/bishop-black.component';
import { KnightBlackComponent } from './chessPieces/black/knight-black/knight-black.component';
import { RookBlackComponent } from './chessPieces/black/rook-black/rook-black.component';
import { PawnBlackComponent } from './chessPieces/black/pawn-black/pawn-black.component';
import { KingWhiteComponent } from './chessPieces/white/king-white/king-white.component';
import { QueenWhiteComponent } from './chessPieces/white/queen-white/queen-white.component';
import { BishopWhiteComponent } from './bishop-white/bishop-white.component';
import { KnightWhiteComponent } from './chessPieces/white/knight-white/knight-white.component';
import { RookWhiteComponent } from './chessPieces/white/rook-white/rook-white.component';
import { PawnWhiteComponent } from './chessPieces/white/pawn-white/pawn-white.component';


@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    KingBlackComponent,
    QueenBlackComponent,
    BishopBlackComponent,
    KnightBlackComponent,
    RookBlackComponent,
    PawnBlackComponent,
    KingWhiteComponent,
    QueenWhiteComponent,
    BishopWhiteComponent,
    KnightWhiteComponent,
    RookWhiteComponent,
    PawnWhiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
