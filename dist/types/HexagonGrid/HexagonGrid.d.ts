import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";
import { Hexagon } from "../Hexagon";
import { Point } from "../Point";
export interface IHexagonGridSize {
    width: number;
    height: number;
}
export interface IHexagonGridParams {
    size: IHexagonGridSize;
    hexagonSize: number;
    type: HexagonGridType;
}
export declare enum HexagonGridType {
    PARALLELOGRAM = 0,
    TRIANGLE = 1,
    HEXAGON = 2,
    RECTANGLE = 3,
}
export declare abstract class HexagonGrid {
    static distance(hexagonA: Hexagon, hexagonB: Hexagon): number;
    readonly verticalDistance: number;
    readonly horizontalDistance: number;
    readonly size: IHexagonGridSize;
    readonly hexagonSize: number;
    hexagons: Map<string, Hexagon>;
    readonly type: HexagonGridType;
    constructor(params: IHexagonGridParams);
    abstract axialToPoint(vector: AxialVector): Point;
    abstract getHexagonNeighborPositions(position: (AxialVector | CubeVector)): CubeVector[];
    abstract pointToAxial(point: Point): AxialVector;
    insertHexagon(hexagon: Hexagon, position: (AxialVector | CubeVector)): void;
    removeHexagon(position: (AxialVector | CubeVector)): void;
    replaceHexagon(hexagon: Hexagon, position: (AxialVector | CubeVector)): void;
    getHexagon(position: (AxialVector | CubeVector)): Hexagon | undefined;
    getHexagonNeighbors(position: (AxialVector | CubeVector)): Hexagon[];
    generateGrid(factoryFunction: () => Hexagon): void;
    protected generateTriangleGrid(factoryFunction: () => Hexagon): void;
    protected generateParallelogramGrid(factoryFunction: () => Hexagon): void;
    protected generateHexagonGrid(factoryFunction: () => Hexagon): void;
    protected generateRectangleGrid(factoryFunction: () => Hexagon): void;
}
