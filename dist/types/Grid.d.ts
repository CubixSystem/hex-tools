import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
import { Hexagon } from './Hexagon';
export interface IGridParams {
    hexagon: Hexagon;
    size: number;
    type: GridType;
}
export declare enum GridType {
    PARALLELOGRAM = 0,
    TRIANGLE = 1,
    HEXAGON = 2,
    RECTANGLE = 3,
}
export declare class Grid {
    static axialToPoint(vector: AxialVector, hexSize: number): AxialVector;
    static pointToAxial(point: AxialVector, hexSize: number): AxialVector;
    static hexDirection(direction: number): CubeVector;
    static neighborPosition(hexagon: Hexagon, direction: number): CubeVector;
    static distance(hexagonA: Hexagon, hexagonB: Hexagon): number;
    readonly verticalDistance: number;
    readonly horizontalDistance: number;
    readonly size: number;
    readonly hexagon: Hexagon;
    hexagons: Map<string, Hexagon>;
    readonly type: GridType;
    constructor(params: IGridParams);
    axialToPoint(vector: AxialVector): AxialVector;
    pointToAxial(point: AxialVector): AxialVector;
}
