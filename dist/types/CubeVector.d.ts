export declare class CubeVector {
    static add(vectorA: CubeVector, vectorB: CubeVector): CubeVector;
    static subtract(vectorA: CubeVector, vectorB: CubeVector): CubeVector;
    static multiply(vector: CubeVector, k: number): CubeVector;
    static roundLength(vector: CubeVector): number;
    static isEqual(vectorA: CubeVector, vectorB: CubeVector): boolean;
    q: number;
    r: number;
    s: number;
    constructor(q: number, r: number, s: number);
    add(vector: CubeVector): CubeVector;
    subtract(vector: CubeVector): CubeVector;
    multiply(k: number): CubeVector;
    readonly roundLength: number;
    isEqual(vector: CubeVector): boolean;
}
