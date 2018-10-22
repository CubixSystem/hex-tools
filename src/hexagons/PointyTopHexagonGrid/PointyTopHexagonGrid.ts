import { Hexagon, HexagonGrid } from "../../hexagons";
import { AxialVector, CubeVector, Point, VectorMath } from "../../vectors";
import { PointyTopGridTools } from "../PointyTopGridTools";

enum PointyTopSide {
  EAST = "east",
  NORTH_EAST = "northEast",
  NORTH_WEST = "northWest",
  SOUTH_EAST = "southEast",
  SOUTH_WEST = "southWest",
  WEST = "west",
}

const pointyTopSideDirections = new Map([
  [PointyTopSide.EAST, new CubeVector(1, 0, 1)],
  [PointyTopSide.NORTH_EAST, new CubeVector(1, -1, 0)],
  [PointyTopSide.NORTH_WEST, new CubeVector(0, -1, 1)],
  [PointyTopSide.SOUTH_EAST, new CubeVector(0, 1, -1)],
  [PointyTopSide.SOUTH_WEST, new CubeVector(-1, 1, 0)],
  [PointyTopSide.WEST, new CubeVector(-1, 0, -1)],
]);

// enum PointyTopRib {
//   NORTH = "north",
//   NORTH_EAST = "northEast",
//   SOUTH_EAST = "southEast",
//   SOUTH = "south",
//   SOUTH_WEST = "southWest",
//   NORTH_WEST = "northWest",
// }

interface IAxialToPointParams {
  vector: AxialVector;
  hexagonSize: number;
  scale: { horizontal: number; vertical: number };
  origin: Point;
}

interface IPointToRoundAxial {
  point: Point;
  hexagonSize: number;
  scale: { horizontal: number; vertical: number };
  origin: Point;
}

class PointyTopHexagonGrid<H extends Hexagon> extends HexagonGrid<H> {
  public static getHexagonNeighborsPositions(
    position: AxialVector | CubeVector,
  ): CubeVector[] {
    let hexagonPosition: CubeVector;
    if (position instanceof AxialVector) {
      hexagonPosition = VectorMath.axialToCube(position);
    } else {
      hexagonPosition = position;
    }
    const neighborPositions: CubeVector[] = [];
    pointyTopSideDirections.forEach(direction => {
      neighborPositions.push(hexagonPosition.add(direction));
    });
    return neighborPositions;
  }

  protected static axialToPoint({
    vector,
    hexagonSize,
    scale = {
      horizontal: 1,
      vertical: 1,
    },
    origin = new Point(0, 0),
  }: IAxialToPointParams): Point {
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
  }: IPointToRoundAxial): AxialVector {
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

  public getHexagonNeighbor(
    position: AxialVector | CubeVector,
    direction: PointyTopSide,
  ): H {
    let hexagonPosition: CubeVector;
    if (position instanceof AxialVector) {
      hexagonPosition = VectorMath.axialToCube(position);
    } else {
      hexagonPosition = position;
    }
    const neighborPosition = PointyTopGridTools.getHexagonNeighborPosition(
      hexagonPosition,
      direction,
    );
    return this.getHexagon(neighborPosition);
  }

  public getHexagonNeighbors(position: AxialVector | CubeVector): H[] {
    const neighbors: H[] = [];
    const neighborPositions = PointyTopHexagonGrid.getHexagonNeighborsPositions(
      position,
    );
    neighborPositions.forEach(neighborPosition => {
      try {
        const hexagon = this.getHexagon(neighborPosition);
        neighbors.push(hexagon);
      } catch (error) {
        return;
      }
    });
    return neighbors;
  }
}

export { PointyTopSide, pointyTopSideDirections, PointyTopHexagonGrid };
