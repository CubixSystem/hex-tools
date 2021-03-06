import { AxialVector, CubeVector, VectorMath } from "../../vectors";

export interface HexagonParams {
  position: AxialVector | CubeVector;
}

export class Hexagon {
  public static isEqual(hexagonA: Hexagon, hexagonB: Hexagon): boolean {
    return AxialVector.isEqual(hexagonA.axialPosition, hexagonB.axialPosition);
  }

  private position: AxialVector;

  constructor(params: HexagonParams) {
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
