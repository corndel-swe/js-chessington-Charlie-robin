import { Rectangle } from "../exercises/rectangles.js";
import { describe, it } from "mocha";
import assert from "assert";

describe("Rectangle", () => {
  describe("area()", () => {
    it("should use given height and width to calculate area", () => {
      const rectangle = new Rectangle(20, 10);
      const area = rectangle.area();
      assert.equal(area, 200);
    });
  });

  describe("perimeter()", () => {
    it("should use given height and width to calculate perimeter", () => {
      const rectangle = new Rectangle(50, 90);
      const perimeter = rectangle.perimeter();
      assert.equal(perimeter, 280);
    });
  });
});
