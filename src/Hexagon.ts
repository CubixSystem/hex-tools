import {Vector2} from './Vector2';
import {Vector3} from './Vector3';

interface IHexParams {
  q: number;
  r: number;
  s?: number;
}

export class Hexagon {
  public static axialToCube(hex: Vector2) {
    const q = hex.q;
    const r = hex.r;
    const s = -q - r;

    return new Vector3(q, r, s);
  }

  public static cubeToAxial(cube: Vector3) {
    return new Vector2(cube.q, cube.r);
  }

  public static cubeDistance(a: Vector3, b: Vector3) {
    return Math.max(
      Math.abs(a.q - b.q),
      Math.abs(a.r - b.r),
      Math.abs(a.s - b.s));
  }

  public static axialDistance(a: Vector2, b: Vector2) {
    const ac = Hexagon.axialToCube(a);
    const bc = Hexagon.axialToCube(b);

    return Hexagon.cubeDistance(ac, bc);
  }

  public static cubeRound(cube: Vector3) {
    let rq = Math.round(cube.q);
    let rr = Math.round(cube.r);
    let rs = Math.round(cube.s);

    const qDiff = Math.abs(rq - cube.q);
    const rDiff = Math.abs(rr - cube.r);
    const sDiff = Math.abs(rs - cube.s);

    if (qDiff > rDiff && qDiff > sDiff) {
      rq = -rr - rs;
    } else if (rDiff > sDiff) {
      rr = -rq - rs;
    } else {
      rs = -rq - rr;
    }

    return new Vector3(rq, rr, rs);
  }

  public static axialRound(hex: Vector2) {
    return Hexagon.cubeToAxial(
      Hexagon.cubeRound(
        Hexagon.axialToCube(hex)));
  }

  public static axialToPoint(hex: Vector2, hexSize: number) {
    const q = hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
    const r = hexSize * 3 / 2 * hex.r;

    return new Vector2(q, r);
  }

  public static pointToHex(point: Vector2, hexSize: number) {
    const q = (point.q * Math.sqrt(3) / 3 - point.r / 3) / hexSize;
    const r = point.r * 2 / 3 / hexSize;

    return Hexagon.axialRound(new Vector2(q, r));
  }

  protected position: Vector2;

  constructor(params: IHexParams) {
    params.s ?
      this.position = Hexagon.cubeToAxial(new Vector3(params.q, params.r, params.s)) :
      this.position = new Vector2(params.q, params.r);
  }

  public get cubePosition() {
    return Hexagon.axialToCube(this.position);
  }

  public get axialPosition() {
    return this.position;
  }
}
