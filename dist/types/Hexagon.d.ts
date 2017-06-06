import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
export interface IHexagonParams {
    position: (AxialVector | CubeVector);
    size: number;
}
export declare class Hexagon {
    static isEqual(hexagonA: Hexagon, hexagonB: Hexagon): boolean;
    protected position: AxialVector;
    constructor(params: IHexagonParams);
    cubePosition: CubeVector;
    axialPosition: AxialVector;
    isEqual(hexagon: Hexagon): boolean;
}
