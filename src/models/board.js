import Player from "./player.js";
import GameSettings from "./gameSettings.js";
import Square from "./square.js";
import King from "./pieces/king.js";

export default class Board {
  constructor() {
    this.currentPlayer = Player.WHITE;
    this.board = this.createBoard();
  }

  createBoard() {
    const board = new Array(GameSettings.BOARD_SIZE);
    for (let i = 0; i < board.length; i++) {
      board[i] = new Array(GameSettings.BOARD_SIZE);
    }
    return board;
  }

  setPiece(square, piece) {
    this.board[square.row][square.col] = piece;
  }

  getPiece(square) {
    return this.board[square.row][square.col];
  }

  findPiece(pieceToFind) {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        if (this.board[row][col] === pieceToFind) {
          return new Square(row, col);
        }
      }
    }
    throw new Error("The supplied piece is not on the board");
  }

  movePiece(fromSquare, toSquare) {
    const movingPiece = this.getPiece(fromSquare);
    if (!!movingPiece && movingPiece.player === this.currentPlayer) {
      this.setPiece(toSquare, movingPiece);
      this.setPiece(fromSquare, undefined);
      this.currentPlayer =
        this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE;
    }
  }

  isSquareOffBoard({ row, col }) {
    return (
      col >= GameSettings.BOARD_SIZE ||
      col < 0 ||
      row >= GameSettings.BOARD_SIZE ||
      row < 0
    );
  }

  canTake(square, player) {
    return (
      this.getPiece(square) !== undefined &&
      this.getPiece(square).player !== player &&
      !(this.getPiece(square) instanceof King)
    );
  }
}
