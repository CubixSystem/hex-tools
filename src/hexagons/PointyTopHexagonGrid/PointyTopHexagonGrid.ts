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
  protected static axialToPoint(vector: AxialVector, hexSize: number): Point {
    const q = vector.q;
    const r = vector.r;
    const x = hexSize * Math.sqrt(3) * (q + r / 2);
    const y = hexSize * 3 / 2 * r;
    return new Point(x, y);
  }

  protected static pointToRoundAxial(
    point: Point,
    hexSize: number,
  ): AxialVector {
    const q = (point.x * Math.sqrt(3) / 3 - point.y / 3) / hexSize;
    const r = point.y * 2 / 3 / hexSize;
    return VectorMath.axialRound(new AxialVector(q, r));
  }

  public axialToPoint(vector: AxialVector): Point {
    return PointyTopHexagonGrid.axialToPoint(vector, this.hexagonSize);
  }

  public pointToRoundAxial(point: Point): AxialVector {
    return PointyTopHexagonGrid.pointToRoundAxial(point, this.hexagonSize);
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
