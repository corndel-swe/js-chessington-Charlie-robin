import Square from "../square.js";
import Player from "../player.js";
import Piece from "./piece.js";

export default class Pawn {
  constructor(player) {
    this.player = player;
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);

    const direction = this.player === Player.WHITE ? 1 : -1;

    const next = new Square(location.row + direction, location.col);

    const moves = this.getDiagonalMoves(board, next);

    if (board.isSquareOffBoard(next) || board.getPiece(next) !== undefined) {
      return moves;
    }

    moves.push(next);

    if (location.row == 6 || location.row == 1) {
      const afterNext = new Square(location.row + direction * 2, location.col);
      if (board.getPiece(afterNext) === undefined) {
        moves.push(afterNext);
      }
    }

    return moves;
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this);
    board.movePiece(currentSquare, newSquare);
  }

  getDiagonalMoves(board, next) {
    return [
      new Square(next.row, next.col + 1),
      new Square(next.row, next.col - 1),
    ].filter(
      (c) => !board.isSquareOffBoard(c) && board.canTake(c, this.player)
    );
  }
}
