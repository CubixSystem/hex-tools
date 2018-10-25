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
    const hexagonPosition =
      position instanceof AxialVector
        ? VectorMath.axialToCube(position)
        : position;
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
  ): H | undefined {
    const hexagonPosition =
      position instanceof AxialVector
        ? VectorMath.axialToCube(position)
        : position;
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
      const hexagon = this.getHexagon(neighborPosition);
      if (hexagon) {
        neighbors.push(hexagon);
      }
    });
    return neighbors;
  }

  public getCircle(
    center: AxialVector | CubeVector,
    radius: number,
  ): { center: H | undefined; hexagons: H[] } {
    const centerVector =
      center instanceof AxialVector ? VectorMath.axialToCube(center) : center;
    const { vectors } = PointyTopGridTools.getCircle(centerVector, radius);
    const hexagons: H[] = [];
    vectors.forEach(vector => {
      const hexagon = this.getHexagon(vector);
      if (hexagon) {
        hexagons.push(hexagon);
      }
    });
    return {
      center: this.getHexagon(center),
      hexagons,
    };
  }

  public getCircleSegment(
    center: AxialVector | CubeVector,
    radius: number,
    direction: PointyTopSide,
  ): { center: H | undefined; hexagons: H[] } {
    const centerVector =
      center instanceof AxialVector ? VectorMath.axialToCube(center) : center;
    const { vectors } = PointyTopGridTools.getCircleSegment(
      centerVector,
      radius,
      direction,
    );
    return {
      center: this.getHexagon(center),
      hexagons: this.vectorsToHexagons(vectors),
    };
  }

  public getFillCircle(
    center: AxialVector | CubeVector,
    radius: number,
  ): { center: H | undefined; hexagons: H[] } {
    const centerVector =
      center instanceof AxialVector ? VectorMath.axialToCube(center) : center;
    const { vectors } = PointyTopGridTools.getFillCircle(centerVector, radius);
    return {
      center: this.getHexagon(center),
      hexagons: this.vectorsToHexagons(vectors),
    };
  }

  public getfillTriangle(
    startVertex: AxialVector | CubeVector,
    radius: number,
    direction: PointyTopSide,
  ): {
    startVertex: H | undefined;
    oppositeVertices: H[];
    vertices: H[];
    hexagons: H[];
  } {
    const startVertexVector =
      startVertex instanceof AxialVector
        ? VectorMath.axialToCube(startVertex)
        : startVertex;
    const {
      vectors,
      oppositeVertices,
      vertices,
    } = PointyTopGridTools.getfillTriangle(
      startVertexVector,
      radius,
      direction,
    );
    return {
      hexagons: this.vectorsToHexagons(vectors),
      oppositeVertices: this.vectorsToHexagons(oppositeVertices),
      startVertex: this.getHexagon(startVertex),
      vertices: this.vectorsToHexagons(vertices),
    };
  }

  public getTriangle(
    startVertex: AxialVector | CubeVector,
    radius: number,
    direction: PointyTopSide,
  ): {
    startVertex: H | undefined;
    oppositeVertices: H[];
    vertices: H[];
    hexagons: H[];
  } {
    const startVertexVector =
      startVertex instanceof AxialVector
        ? VectorMath.axialToCube(startVertex)
        : startVertex;
    const {
      vectors,
      oppositeVertices,
      vertices,
    } = PointyTopGridTools.getTriangle(startVertexVector, radius, direction);
    return {
      hexagons: this.vectorsToHexagons(vectors),
      oppositeVertices: this.vectorsToHexagons(oppositeVertices),
      startVertex: this.getHexagon(startVertex),
      vertices: this.vectorsToHexagons(vertices),
    };
  }
}

export { PointyTopSide, pointyTopSideDirections, PointyTopHexagonGrid };
