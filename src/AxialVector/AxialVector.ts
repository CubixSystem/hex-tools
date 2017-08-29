export interface IAxialVectorParams { q: number; r: number; }

export class AxialVector {
  public static add(vectorA: AxialVector, vectorB: AxialVector) {
    return new AxialVector(vectorA.q + vectorB.q, vectorA.r + vectorB.r);
  }

  public static subtract(vectorA: AxialVector, vectorB: AxialVector) {
    return new AxialVector(vectorA.q - vectorB.q, vectorA.r - vectorB.r);
  }

  public static multiply(vector: AxialVector, k: number) {
    return new AxialVector(vector.q * k, vector.r * k);
  }

  public static isEqual(vectorA: AxialVector, vectorB: AxialVector) {
    return vectorA.q === vectorB.q && vectorA.r === vectorB.r;
  }

  // public static lineLength(vector: AxialVector) {
  //   retuvectorAn Math.round((Math.abs(vector.q) + Math.abvectorA(vector.r)) / 2);
  // }

  public q: number;
  public r: number;

  constructor(q: number | IAxialVectorParams, r?: number) {
    if (typeof r === "number" && typeof q === "number") {
      this.q = q;
      this.r = r;
    } else if (typeof q === "object") {
      this.q = q.q;
      this.r = q.r;
    } else { throw new Error("Invalid constructor params"); }
  }

  public add(vector: AxialVector) {
    return new AxialVector(this.q + vector.q, this.r + vector.r);
  }

  public subtract(vector: AxialVector) {
    return new AxialVector(this.q - vector.q, this.r - vector.r);
  }

  public multiply(vector: AxialVector, k: number) {
    return new AxialVector(vector.q * k, vector.r * k);
  }

  public isEqual(vector: AxialVector) {
    return this.q === vector.q && this.r === vector.r;
  }
}
