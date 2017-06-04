import { AxialVector } from './AxialVector';
import { HexagonGrid } from './HexagonGrid';
import { Point } from './Point';
import { VectorMath } from './VectorMath';

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
}
