import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
export declare class VectorMath {
    static axialToCube(vector: AxialVector): CubeVector;
    static cubeToAxial(vector: CubeVector): AxialVector;
    static cubeDistance(vectorA: CubeVector, vectorB: CubeVector): number;
    static axialDistance(vectorA: AxialVector, vectorB: AxialVector): number;
    static cubeRound(vector: CubeVector): CubeVector;
    static axialRound(vector: AxialVector): AxialVector;
}
