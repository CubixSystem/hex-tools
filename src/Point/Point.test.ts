import { Point } from "./Point";

describe("Point", () => {
  it("should add", () => {
    Point.add.should.be.a("function");
    Point.prototype.add.should.be.a("function");

    const pointA = new Point(1, 2);
    const pointB = new Point(2, 3);

    let result = Point.add(pointA, pointB);
    result.should.be.instanceof(Point);
    result.x.should.equals(3);
    result.y.should.equals(5);

    result = pointA.add(pointB);
    result.should.be.instanceof(Point);
    result.x.should.equals(3);
    result.y.should.equals(5);
  });

  it("should subtract", () => {
    Point.subtract.should.be.a("function");
    Point.prototype.subtract.should.be.a("function");

    const pointA = new Point(4, 2);
    const pointB = new Point(2, 1);

    let result = Point.subtract(pointA, pointB);
    result.should.be.instanceof(Point);
    result.x.should.equals(2);
    result.y.should.equals(1);

    result = pointA.subtract(pointB);
    result.should.be.instanceof(Point);
    result.x.should.equals(2);
    result.y.should.equals(1);
  });

  it("should multiply", () => {
    Point.multiply.should.be.a("function");
    Point.prototype.multiply.should.be.a("function");

    const point = new Point(1, 1);
    let result = Point.multiply(point, 3);
    result.x.should.equals(3);
    result.y.should.equals(3);

    result = point.multiply(3);
    result.should.be.instanceof(Point);
    result.x.should.equals(3);
    result.y.should.equals(3);
  });

  it("should isEqual", () => {
    Point.isEqual.should.be.a("function");
    Point.prototype.isEqual.should.be.a("function");

    const pointA = new Point(0, 0);
    const pointB = new Point(0, 0);
    const pointC = new Point(0, 1);

    Point.isEqual(pointA, pointB)
      .should.equals(true);
    Point.isEqual(pointA, pointC)
      .should.equals(false);

    pointA.isEqual(pointB)
      .should.equals(true);
    pointA.isEqual(pointC)
      .should.equals(false);
  });
});
