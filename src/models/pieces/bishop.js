import Square from "../square.js";
import Piece from "./piece.js";

export default class Bishop extends Piece {
  constructor(player) {
    super(player, false);
  }

  getDirections() {
    return [
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ];
  }
}
