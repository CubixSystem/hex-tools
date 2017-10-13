export class Point {
  public static add(pointA: Point, pointB: Point): Point {
    return new Point(pointA.x + pointB.x, pointA.y + pointB.y);
  }

  public static subtract(pointA: Point, pointB: Point): Point {
    return new Point(pointA.x - pointB.x, pointA.y - pointB.y);
  }

  public static multiply(point: Point, k: number): Point {
    return new Point(point.x * k, point.y * k);
  }

  public static isEqual(pointA: Point, pointB: Point): boolean {
    return pointA.x === pointB.x && pointA.y === pointB.y;
  }

  public x: number;
  public y: number;

  constructor(q: number, r: number) {
    this.x = q;
    this.y = r;
  }

  public add(point: Point): Point {
    return new Point(this.x + point.x, this.y + point.y);
  }

  public subtract(point: Point): Point {
    return new Point(this.x - point.x, this.y - point.y);
  }

  public multiply(k: number): Point {
    return new Point(this.x * k, this.y * k);
  }

  public isEqual(point: Point): boolean {
    return this.x === point.x && this.y === point.y;
  }
}
