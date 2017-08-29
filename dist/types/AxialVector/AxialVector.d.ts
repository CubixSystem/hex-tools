export interface IAxialVectorParams {
    q: number;
    r: number;
}
export declare class AxialVector {
    static add(vectorA: AxialVector, vectorB: AxialVector): AxialVector;
    static subtract(vectorA: AxialVector, vectorB: AxialVector): AxialVector;
    static multiply(vector: AxialVector, k: number): AxialVector;
    static isEqual(vectorA: AxialVector, vectorB: AxialVector): boolean;
    q: number;
    r: number;
    constructor(q: number | IAxialVectorParams, r?: number);
    add(vector: AxialVector): AxialVector;
    subtract(vector: AxialVector): AxialVector;
    multiply(vector: AxialVector, k: number): AxialVector;
    isEqual(vector: AxialVector): boolean;
}
