import { Maths } from "../exercises/maths.js";
import { describe, it } from "mocha";
import assert from "assert";

describe("Maths", () => {
  describe("PI", () => {
    it("should be defined", () => {
      assert.notEqual(Maths.PI, undefined);
    });

    it("should be equal to 3.14", () => {
      assert.equal(Maths.PI, 3.14);
    });
  });

  describe("max()", () => {
    it("should return largest positive number", () => {
      assert.equal(Maths.max(1000, 200), 1000);
    });

    it("should return largest negative number", () => {
      assert.equal(Maths.max(-100, -200), -100);
    });

    it("should handle duplicates ", () => {
      assert.equal(Maths.max(9, 9), 9);
    });
  });

  describe("round()", () => {
    it("should return the same number when given a whole number", () => {
      assert.equal(Maths.round(1000), 1000);
    });

    it("should round down when less than .5", () => {
      assert.equal(Maths.round(1000.323), 1000);
    });

    it("should round up when over .5", () => {
      assert.equal(Maths.round(1000.6323), 1001);
    });

    it("should round up when equal to .5", () => {
      assert.equal(Maths.round(1000.5), 1001);
    });
  });
});
