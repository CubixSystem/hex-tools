import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";
import { VectorMath } from "../VectorMath";

export interface IHexagonParams {
  position: AxialVector | CubeVector;
  size: number;
}

export class Hexagon {
  public static isEqual(hexagonA: Hexagon, hexagonB: Hexagon): boolean {
    return AxialVector.isEqual(hexagonA.axialPosition, hexagonB.axialPosition);
  }

  protected position: AxialVector;

  constructor(params: IHexagonParams) {
    params.position instanceof CubeVector
      ? (this.position = VectorMath.cubeToAxial(
          new CubeVector(params.position),
        ))
      : (this.position = new AxialVector(params.position));
  }

  public get cubePosition(): CubeVector {
    return VectorMath.axialToCube(this.position);
  }

  public set cubePosition(position: CubeVector) {
    this.position = VectorMath.cubeToAxial(position);
  }

  public get axialPosition(): AxialVector {
    return this.position;
  }

  public set axialPosition(position: AxialVector) {
    this.position = position;
  }

  public isEqual(hexagon: Hexagon): boolean {
    return Hexagon.isEqual(this, hexagon);
  }
}
