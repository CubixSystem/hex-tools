export class Point {
  public static add(pointA: Point, pointB: Point) {
    return new Point(pointA.x + pointB.x, pointA.y + pointB.y);
  }

  public static subtract(pointA: Point, pointB: Point) {
    return new Point(pointA.x - pointB.x, pointA.y - pointB.y);
  }

  public static multiply(point: Point, k: number) {
    return new Point(point.x * k, point.y * k);
  }

  public static isEqual(pointA: Point, pointB: Point) {
    return pointA.x === pointB.x && pointA.y === pointB.y;
  }

  public x: number;
  public y: number;

  constructor(q: number, r: number) {
    this.x = q;
    this.y = r;
  }

  public add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }

  public subtract(point: Point) {
    return new Point(this.x - point.x, this.y - point.y);
  }

  public multiply(point: Point, k: number) {
    return new Point(point.x * k, point.y * k);
  }

  public isEqual(point: Point) {
    return this.x === point.x && this.y === point.y;
  }
}
