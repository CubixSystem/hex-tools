import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";

export class VectorMath {
  public static axialToCube(vector: AxialVector): CubeVector {
    const q = vector.q;
    const r = vector.r;
    const s = -q - r;

    return new CubeVector(q, r, s);
  }

  public static cubeToAxial(vector: CubeVector): AxialVector {
    return new AxialVector(vector.q, vector.r);
  }

  public static cubeDistance(vectorA: CubeVector, vectorB: CubeVector): number {
    return Math.max(
      Math.abs(vectorA.q - vectorB.q),
      Math.abs(vectorA.r - vectorB.r),
      Math.abs(vectorA.s - vectorB.s),
    );
  }

  public static axialDistance(
    vectorA: AxialVector,
    vectorB: AxialVector,
  ): number {
    const ac = VectorMath.axialToCube(vectorA);
    const bc = VectorMath.axialToCube(vectorB);

    return VectorMath.cubeDistance(ac, bc);
  }

  public static cubeRound(vector: CubeVector): CubeVector {
    let rq = Math.round(vector.q);
    let rr = Math.round(vector.r);
    let rs = Math.round(vector.s);

    const qDiff = Math.abs(rq - vector.q);
    const rDiff = Math.abs(rr - vector.r);
    const sDiff = Math.abs(rs - vector.s);

    if (qDiff > rDiff && qDiff > sDiff) {
      rq = -rr - rs;
    } else if (rDiff > sDiff) {
      rr = -rq - rs;
    } else {
      rs = -rq - rr;
    }

    return new CubeVector(rq, rr, rs);
  }

  public static axialRound(vector: AxialVector): AxialVector {
    return VectorMath.cubeToAxial(
      VectorMath.cubeRound(VectorMath.axialToCube(vector)),
    );
  }

  public static cubeLine(a: CubeVector, b: CubeVector): CubeVector[] {
    // TODO: Check
    const N = a.subtract(b).roundLength;

    const results = [];
    const step = 1.0 / Math.max(N, 1);
    for (let i = 0; i <= N; i++) {
      results.push(VectorMath.cubeRound(VectorMath.cubeLerp(a, b, step * i)));
    }
    return results;
  }

  protected static cubeLerp(
    vectorA: CubeVector,
    vectorB: CubeVector,
    t: number,
  ): CubeVector {
    return new CubeVector(
      VectorMath.lerp(vectorA.q, vectorB.q, t),
      VectorMath.lerp(vectorA.r, vectorB.r, t),
      VectorMath.lerp(vectorA.s, vectorB.s, t),
    );
  }

  protected static lerp(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t;
  }
}
