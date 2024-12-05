import Square from "../square.js";
import Piece from "./piece.js";

export default class King extends Piece {
  constructor(player) {
    super(player, true);
  }

  getDirections() {
    return [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
  }
}
