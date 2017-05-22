import { AxialVector } from './AxialVector';
import { CubeVector } from './CubeVector';
import { Hexagon } from './Hexagon';
import { VectorMath } from './VectorMath';

export interface IGridParams {
  hexagon: Hexagon;
  size: number;
  type: GridType;
}

// const Direction = {
//   NORTH: new Vector3(),
//   NORTH_EAST: new Vector3(),
//   EAST: new Vector3(),
//   SOUTH_EAST: new Vector3(),
//   SOUTH: new Vector3(),
//   SOUTH_WEST: new Vector3(),
//   WEST: new Vector3(),
//   NORTH_WEST: new Vector3()
// };

export enum GridType {
  PARALLELOGRAM,
  TRIANGLE,
  HEXAGON,
  RECTANGLE
}

const Direction = [
  new CubeVector(1, 0, -1),
  new CubeVector(1, -1, 0),
  new CubeVector(0, -1, 1),
  new CubeVector(-1, 0, 1),
  new CubeVector(-1, 1, 0),
  new CubeVector(0, 1, -1)];

const directionError = 'Wrong direction';

export class Grid {
  public static axialToPoint(vector: AxialVector, hexSize: number) {
    const q = hexSize * Math.sqrt(3) * (vector.q + vector.r / 2);
    const r = hexSize * 3 / 2 * vector.r;

    return new AxialVector(q, r);
  }

  public static pointToAxial(point: AxialVector, hexSize: number) {
    const q = (point.q * Math.sqrt(3) / 3 - point.r / 3) / hexSize;
    const r = point.r * 2 / 3 / hexSize;

    return VectorMath.axialRound(new AxialVector(q, r));
  }

  public static hexDirection(direction: number) {
    if (direction < 0 || direction > 5) { throw new Error(directionError); }

    return Direction[direction];
  }

  public static neighborPosition(hexagon: Hexagon, direction: number) {
    const hexDirection = Grid.hexDirection(direction);

    return hexagon.cubePosition.add(hexDirection);
  }

  public static distance(hexagonA: Hexagon, hexagonB: Hexagon) {
    return hexagonA.cubePosition.subtract(hexagonB.cubePosition).roundLength;
  }

  public readonly verticalDistance: number;
  public readonly horizontalDistance: number;
  public readonly size: number;
  public readonly hexagon: Hexagon;
  public hexagons: Map<string, Hexagon>;
  public readonly type: GridType;

  constructor(params: IGridParams) {
    this.verticalDistance = params.hexagon.height * 3 / 4;
    this.horizontalDistance = params.hexagon.width;
    this.size = params.size;
    this.hexagon = params.hexagon;
    this.type = params.type;

    // this.generateGrid();
  }

  public axialToPoint(vector: AxialVector) {
    return Grid.axialToPoint(vector, this.hexagon.size);
  }

  public pointToAxial(point: AxialVector) {
    return Grid.pointToAxial(point, this.hexagon.size);
  }

  // public insert(hexagon: Hexagon) {
  //   // const hash = combineHash(hash(hexagon.axialPosition.q), hash(hexagon.axialPosition.r));
  //   // this.hexagons[hash] = hexagon;
  // }

  // public generateGrid() {
  //   switch (this.type) {
  //     case GridType.PARALLELOGRAM:
  //       for (let q = q1; q <= q2; q++) {
  //         for (let r = r1; r <= r2; r++) {
  //           map.insert(Hex(q, r, -q - r)));
  //         }
  //       }
  //       break;
  //   }
  // }
}
