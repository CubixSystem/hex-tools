import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
import { VectorMath } from './VectorMath';

export interface IHexagonParams {
  q: number;
  r: number;
  s?: number;
  size: number;
}

export class Hexagon {
  public static isEqual(hexagonA: Hexagon, hexagonB: Hexagon) {
    return AxialVector.isEqual(hexagonA.axialPosition, hexagonB.axialPosition);
  }

  public size: number;
  public height: number;
  public width: number;
  public verticalDistance: number;
  public horizontalDistance: number;

  protected position: AxialVector;

  constructor(params: IHexagonParams) {
    params.s ?
      this.position = VectorMath.cubeToAxial(new CubeVector(params.q, params.r, params.s)) :
      this.position = new AxialVector(params.q, params.r);
    this.size = params.size;
    this.height = this.size * 2;
    this.width = Math.sqrt(3) / 2 * this.height;
  }

  public get cubePosition() {
    return VectorMath.axialToCube(this.position);
  }

  public get axialPosition() {
    return this.position;
  }

  public isEqual(hexagon: Hexagon) {
    return Hexagon.isEqual(this, hexagon);
  }
}
