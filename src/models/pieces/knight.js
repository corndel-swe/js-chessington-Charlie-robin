import Square from "../square.js";
import Piece from "./piece.js";

export default class Knight extends Piece {
  constructor(player) {
    super(player, true);
  }

  getDirections() {
    return [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [-1, 2],
      [1, -2],
      [-1, -2],
    ];
  }
}
