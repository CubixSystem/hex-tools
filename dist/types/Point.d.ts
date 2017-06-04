export declare class Point {
    static add(pointA: Point, pointB: Point): Point;
    static subtract(pointA: Point, pointB: Point): Point;
    static multiply(point: Point, k: number): Point;
    static isEqual(pointA: Point, pointB: Point): boolean;
    x: number;
    y: number;
    constructor(q: number, r: number);
    add(point: Point): Point;
    subtract(point: Point): Point;
    multiply(point: Point, k: number): Point;
    isEqual(point: Point): boolean;
}
