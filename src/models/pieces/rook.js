import Piece from "./piece.js";

export default class Rook extends Piece {
  constructor(player) {
    super(player, false);
  }

  getDirections() {
    return [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];
  }
}
