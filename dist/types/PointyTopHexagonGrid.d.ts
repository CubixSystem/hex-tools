import { AxialVector } from './AxialVector';
import { HexagonGrid } from './HexagonGrid';
import { Point } from './Point';
export declare class PointyTopHexagonGrid extends HexagonGrid {
    protected static axialToPoint(vector: AxialVector, hexSize: number): Point;
    protected static pointToAxial(point: Point, hexSize: number): AxialVector;
    axialToPoint(vector: AxialVector): Point;
    pointToAxial(point: Point): AxialVector;
}
