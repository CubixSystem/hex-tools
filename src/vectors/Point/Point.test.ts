import "jest-extended";
import { Point } from "./Point";

describe("Point", () => {
  it("should add", () => {
    expect(Point.add).toBeFunction();
    expect(Point.prototype.add).toBeFunction();

    const pointA = new Point(1, 2);
    const pointB = new Point(2, 3);

    let result = Point.add(pointA, pointB);

    expect(result).toBeInstanceOf(Point);
    expect(result.x).toBe(3);
    expect(result.y).toBe(5);

    result = pointA.add(pointB);

    expect(result).toBeInstanceOf(Point);
    expect(result.x).toBe(3);
    expect(result.y).toBe(5);
  });

  it("should subtract", () => {
    expect(Point.subtract).toBeFunction();
    expect(Point.prototype.subtract).toBeFunction();

    const pointA = new Point(4, 2);
    const pointB = new Point(2, 1);

    let result = Point.subtract(pointA, pointB);

    expect(result).toBeInstanceOf(Point);
    expect(result.x).toBe(2);
    expect(result.y).toBe(1);

    result = pointA.subtract(pointB);

    expect(result).toBeInstanceOf(Point);
    expect(result.x).toBe(2);
    expect(result.y).toBe(1);
  });

  it("should multiply", () => {
    expect(Point.multiply).toBeFunction();
    expect(Point.prototype.multiply).toBeFunction();

    const point = new Point(1, 1);

    let result = Point.multiply(point, 3);

    expect(result).toBeInstanceOf(Point);
    expect(result.x).toBe(3);
    expect(result.y).toBe(3);

    result = point.multiply(3);

    expect(result).toBeInstanceOf(Point);
    expect(result.x).toBe(3);
    expect(result.y).toBe(3);
  });

  it("should isEqual", () => {
    expect(Point.isEqual).toBeFunction();
    expect(Point.prototype.isEqual).toBeFunction();

    const pointA = new Point(0, 0);
    const pointB = new Point(0, 0);
    const pointC = new Point(0, 1);

    expect(Point.isEqual(pointA, pointB)).toBe(true);
    expect(Point.isEqual(pointA, pointC)).toBe(false);

    expect(pointA.isEqual(pointB)).toBe(true);
    expect(pointA.isEqual(pointC)).toBe(false);
  });
});
