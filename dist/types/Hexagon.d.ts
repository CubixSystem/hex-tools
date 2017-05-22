import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
export interface IHexagonParams {
    q: number;
    r: number;
    s?: number;
    size: number;
}
export declare class Hexagon {
    static isEqual(hexagonA: Hexagon, hexagonB: Hexagon): boolean;
    size: number;
    height: number;
    width: number;
    protected position: AxialVector;
    constructor(params: IHexagonParams);
    readonly cubePosition: CubeVector;
    readonly axialPosition: AxialVector;
    isEqual(hexagon: Hexagon): boolean;
}
