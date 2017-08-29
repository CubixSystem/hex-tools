import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";

export class VectorMath {
  public static axialToCube(vector: AxialVector) {
    const q = vector.q;
    const r = vector.r;
    const s = -q - r;

    return new CubeVector(q, r, s);
  }

  public static cubeToAxial(vector: CubeVector) {
    return new AxialVector(vector.q, vector.r);
  }

  public static cubeDistance(vectorA: CubeVector, vectorB: CubeVector) {
    return Math.max(
      Math.abs(vectorA.q - vectorB.q),
      Math.abs(vectorA.r - vectorB.r),
      Math.abs(vectorA.s - vectorB.s));
  }

  public static axialDistance(vectorA: AxialVector, vectorB: AxialVector) {
    const ac = VectorMath.axialToCube(vectorA);
    const bc = VectorMath.axialToCube(vectorB);

    return VectorMath.cubeDistance(ac, bc);
  }

  public static cubeRound(vector: CubeVector) {
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

  public static axialRound(vector: AxialVector) {
    return VectorMath.cubeToAxial(
      VectorMath.cubeRound(
        VectorMath.axialToCube(vector)));
  }
}
