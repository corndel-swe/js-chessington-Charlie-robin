import Square from "../square.js";

export default class Piece {
  constructor(player, moveOnce) {
    this.player = player;
    this.moveOnce = moveOnce;
  }

  getAvailableMoves(board) {
    const allowedMoves = [];
    let from = board.findPiece(this);

    for (let direction of this.getDirections()) {
      let current = from;

      while (true) {
        if (!current.equals(from) && this.moveOnce) break;

        current = new Square(
          current.row + direction[0],
          current.col + direction[1]
        );

        if (board.isSquareOffBoard(current)) break;

        if (board.getPiece(current) == undefined) {
          allowedMoves.push(current);
          continue;
        }

        if (board.canTake(current, this.player)) {
          allowedMoves.push(current);
        }

        break;
      }
    }

    return allowedMoves;
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this);
    board.movePiece(currentSquare, newSquare);
  }

  getDirections() {
    throw new Error("This method should be overwritten");
  }
}
