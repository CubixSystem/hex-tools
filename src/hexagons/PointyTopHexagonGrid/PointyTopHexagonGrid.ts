import { Hexagon, HexagonGrid } from "../../hexagons";
import { AxialVector, CubeVector, Point, VectorMath } from "../../vectors";

export enum PointyTopNeighborDirection {
  EAST,
  NORTH_EAST,
  NORTH_WEST,
  SOUTH_EAST,
  SOUTH_WEST,
  WEST,
}

export const pointyTopDirections = new Map([
  [PointyTopNeighborDirection.EAST, new CubeVector(-1, 0, 1)],
  [PointyTopNeighborDirection.NORTH_EAST, new CubeVector(-1, 1, 0)],
  [PointyTopNeighborDirection.NORTH_WEST, new CubeVector(0, 1, -1)],
  [PointyTopNeighborDirection.SOUTH_EAST, new CubeVector(0, -1, 1)],
  [PointyTopNeighborDirection.SOUTH_WEST, new CubeVector(1, -1, 0)],
  [PointyTopNeighborDirection.WEST, new CubeVector(1, 0, -1)],
]);

export class PointyTopHexagonGrid<H extends Hexagon> extends HexagonGrid<H> {
  protected static axialToPoint({
    vector,
    hexagonSize,
    scale = {
      horizontal: 1,
      vertical: 1,
    },
    origin = new Point(0, 0),
  }: {
    vector: AxialVector;
    hexagonSize: number;
    scale: { horizontal: number; vertical: number };
    origin: Point;
  }): Point {
    const q = vector.q;
    const r = vector.r;
    const x =
      hexagonSize *
      (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r) *
      scale.horizontal;
    const y = hexagonSize * (3 / 2) * r * scale.vertical;

    return new Point(x + origin.x, y + origin.y);
  }

  protected static pointToRoundAxial({
    point,
    hexagonSize,
    scale = {
      horizontal: 1,
      vertical: 1,
    },
    origin = new Point(0, 0),
  }: {
    point: Point;
    hexagonSize: number;
    scale: { horizontal: number; vertical: number };
    origin: Point;
  }): AxialVector {
    const x = (point.x - origin.x) / scale.horizontal;
    const y = (point.y - origin.y) / scale.vertical;
    const q = ((Math.sqrt(3) / 3) * x - (1 / 3) * y) / hexagonSize;
    const r = ((2 / 3) * y) / hexagonSize;

    return VectorMath.axialRound(new AxialVector(q, r));
  }

  public axialToPoint(vector: AxialVector): Point {
    return PointyTopHexagonGrid.axialToPoint({
      hexagonSize: this.hexagonSize,
      origin: this.origin,
      scale: this.scale,
      vector,
    });
  }

  public pointToRoundAxial(point: Point): AxialVector {
    return PointyTopHexagonGrid.pointToRoundAxial({
      hexagonSize: this.hexagonSize,
      origin: this.origin,
      point,
      scale: this.scale,
    });
  }

  public getHexagonNeighborsPositions(
    position: AxialVector | CubeVector,
  ): CubeVector[] {
    const neighborPositions: CubeVector[] = [];
    const hexagon = this.getHexagon(position);
    pointyTopDirections.forEach(direction => {
      neighborPositions.push(hexagon.cubePosition.add(direction));
    });
    return neighborPositions;
  }
}
