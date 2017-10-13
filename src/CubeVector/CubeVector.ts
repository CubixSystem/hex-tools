export interface ICubeVectorParams {
  q?: number;
  r?: number;
  s?: number;
}

export class CubeVector {
  public static add(vectorA: CubeVector, vectorB: CubeVector): CubeVector {
    return new CubeVector(
      vectorA.q + vectorB.q,
      vectorA.r + vectorB.r,
      vectorA.s + vectorB.s,
    );
  }

  public static subtract(vectorA: CubeVector, vectorB: CubeVector): CubeVector {
    return new CubeVector(
      vectorA.q - vectorB.q,
      vectorA.r - vectorB.r,
      vectorA.s - vectorB.s,
    );
  }

  public static multiply(vector: CubeVector, k: number): CubeVector {
    return new CubeVector(vector.q * k, vector.r * k, vector.s * k);
  }

  public static roundLength(vector: CubeVector): number {
    return Math.round(
      (Math.abs(vector.q) + Math.abs(vector.r) + Math.abs(vector.s)) / 2,
    );
  }

  public static isEqual(vectorA: CubeVector, vectorB: CubeVector): boolean {
    return (
      vectorA.q === vectorB.q &&
      vectorA.r === vectorB.r &&
      vectorA.s === vectorB.s
    );
  }

  public q: number;
  public r: number;
  public s: number;

  constructor(q: number | ICubeVectorParams, r?: number, s?: number) {
    if (typeof q === "number") {
      this.complementVector({ q, r, s });
    } else if (typeof q === "object") {
      this.complementVector(q);
    } else {
      throw new Error("Invalid constructor params");
    }
  }

  public add(vector: CubeVector): CubeVector {
    return new CubeVector(
      this.q + vector.q,
      this.r + vector.r,
      this.s + vector.s,
    );
  }

  public subtract(vector: CubeVector): CubeVector {
    return new CubeVector(
      this.q - vector.q,
      this.r - vector.r,
      this.s - vector.s,
    );
  }

  public multiply(k: number): CubeVector {
    return new CubeVector(this.q * k, this.r * k, this.s * k);
  }

  public get roundLength(): number {
    return Math.round(
      (Math.abs(this.q) + Math.abs(this.r) + Math.abs(this.s)) / 2,
    );
  }

  public isEqual(vector: CubeVector): boolean {
    return this.q === vector.q && this.r === vector.r && this.s === vector.s;
  }

  protected complementVector(vector: ICubeVectorParams): void {
    const q = vector.q;
    const r = vector.r;
    const s = vector.s;

    if (
      typeof q === "number" &&
      typeof r === "number" &&
      typeof s === "number"
    ) {
      this.q = q;
      this.r = r;
      this.s = s;
    } else if (
      typeof q === "number" &&
      typeof r === "number" &&
      typeof s === "undefined"
    ) {
      this.q = q;
      this.r = r;
      this.s = -q - r;
    } else if (
      typeof q === "undefined" &&
      typeof r === "number" &&
      typeof s === "number"
    ) {
      this.q = -r - s;
      this.r = r;
      this.s = s;
    } else if (
      typeof q === "number" &&
      typeof r === "undefined" &&
      typeof s === "number"
    ) {
      this.q = q;
      this.r = -q - s;
      this.s = s;
    }
  }
}
