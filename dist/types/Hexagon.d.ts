import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
export interface IHexagonParams {
    position: (AxialVector | CubeVector);
    size: number;
}
export declare class Hexagon {
    static isEqual(hexagonA: Hexagon, hexagonB: Hexagon): boolean;
    position: AxialVector;
    constructor(params: IHexagonParams);
    readonly cubePosition: CubeVector;
    readonly axialPosition: AxialVector;
    isEqual(hexagon: Hexagon): boolean;
}
