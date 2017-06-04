import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
import { VectorMath } from './VectorMath';

export interface IHexagonParams {
  position: (AxialVector | CubeVector);
  size: number;
}

export class Hexagon {
  public static isEqual(hexagonA: Hexagon, hexagonB: Hexagon) {
    return AxialVector.isEqual(hexagonA.axialPosition, hexagonB.axialPosition);
  }

  public position: AxialVector;

  constructor(params: IHexagonParams) {
    params.position instanceof CubeVector ?
      this.position = VectorMath.cubeToAxial(new CubeVector(params.position)) :
      this.position = new AxialVector(params.position);
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
