import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";
import { HexagonGrid } from "../HexagonGrid";
import { Point } from "../Point";
import { VectorMath } from "../VectorMath";

export enum PointyTopNeighborDirection {
  EAST,
  NORTH_EAST,
  NORTH_WEST,
  SOUTH_EAST,
  SOUTH_WEST,
  WEST,
}

export const PointyTopDirectionVector = new Map([
  [PointyTopNeighborDirection.EAST, new CubeVector(-1, 0, 1)],
  [PointyTopNeighborDirection.NORTH_EAST, new CubeVector(-1, 1, 0)],
  [PointyTopNeighborDirection.NORTH_WEST, new CubeVector(0, 1, -1)],
  [PointyTopNeighborDirection.SOUTH_EAST, new CubeVector(0, -1, 1)],
  [PointyTopNeighborDirection.SOUTH_WEST, new CubeVector(1, -1, 0)],
  [PointyTopNeighborDirection.WEST, new CubeVector(1, 0, -1)],
]);

export class PointyTopHexagonGrid extends HexagonGrid {
  protected static axialToPoint(vector: AxialVector, hexSize: number) {
    const q = vector.q;
    const r = vector.r;
    const x = hexSize * Math.sqrt(3) * (q + r / 2);
    const y = hexSize * 3 / 2 * r;
    return new Point(x, y);
  }

  protected static pointToAxial(point: Point, hexSize: number) {
    const q = (point.x * Math.sqrt(3) / 3 - point.y / 3) / hexSize;
    const r = point.y * 2 / 3 / hexSize;
    return VectorMath.axialRound(new AxialVector(q, r));
  }

  public axialToPoint(vector: AxialVector) {
    return PointyTopHexagonGrid.axialToPoint(vector, this.hexagonSize);
  }

  public pointToAxial(point: Point) {
    return PointyTopHexagonGrid.pointToAxial(point, this.hexagonSize);
  }

  public getHexagonNeighborPositions(position: (AxialVector | CubeVector)) {
    const neighborPositions: CubeVector[] = [];
    const hexagon = this.getHexagon(position);
    if (hexagon) {
      PointyTopDirectionVector.forEach((vector) => {
        neighborPositions.push(hexagon.cubePosition.add(vector));
      });
    }
    return neighborPositions;
  }
}
