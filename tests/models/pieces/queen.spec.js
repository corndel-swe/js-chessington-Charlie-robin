import { strict as assert } from "assert";
import Queen from "../../../src/models/pieces/queen.js";
import Board from "../../../src/models/board.js";
import Square from "../../../src/models/square.js";
import Player from "../../../src/models/player.js";

describe("Queen", () => {
  let board;
  beforeEach(() => (board = new Board()));

  it("can move to empty surrounding squares", () => {
    const queen = new Queen(Player.WHITE);
    board.setPiece(new Square(3, 4), queen);

    const moves = queen.getAvailableMoves(board);

    const expectedMoves = [
      new Square(4, 4),
      new Square(5, 4),
      new Square(6, 4),
      new Square(7, 4),
      new Square(2, 4),
      new Square(1, 4),
      new Square(0, 4),
      new Square(3, 5),
      new Square(3, 6),
      new Square(3, 7),
      new Square(3, 3),
      new Square(3, 2),
      new Square(3, 1),
      new Square(3, 0),
      new Square(4, 5),
      new Square(5, 6),
      new Square(6, 7),
      new Square(4, 3),
      new Square(5, 2),
      new Square(6, 1),
      new Square(7, 0),
      new Square(2, 5),
      new Square(1, 6),
      new Square(0, 7),
      new Square(2, 3),
      new Square(1, 2),
      new Square(0, 1),
    ];

    assert.deepEqual(new Set(moves), new Set(expectedMoves));
  });
});
