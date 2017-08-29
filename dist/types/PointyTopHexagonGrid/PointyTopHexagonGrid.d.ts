import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";
import { HexagonGrid } from "../HexagonGrid";
import { Point } from "../Point";
export declare enum PointyTopNeighborDirection {
    EAST = 0,
    NORTH_EAST = 1,
    NORTH_WEST = 2,
    SOUTH_EAST = 3,
    SOUTH_WEST = 4,
    WEST = 5,
}
export declare const PointyTopDirectionVector: Map<PointyTopNeighborDirection, CubeVector>;
export declare class PointyTopHexagonGrid extends HexagonGrid {
    protected static axialToPoint(vector: AxialVector, hexSize: number): Point;
    protected static pointToAxial(point: Point, hexSize: number): AxialVector;
    axialToPoint(vector: AxialVector): Point;
    pointToAxial(point: Point): AxialVector;
    getHexagonNeighborPositions(position: (AxialVector | CubeVector)): CubeVector[];
}
