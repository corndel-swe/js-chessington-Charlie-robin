import Square from "../square.js";
import Piece from "./piece.js";

export default class Queen extends Piece {
  constructor(player) {
    super(player, false);
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
