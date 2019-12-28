import { Hexagon, HexagonGrid, IHexagonGridParams } from "../../hexagons";
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

class PointyTopHexagonGrid<H extends Hexagon = Hexagon> extends HexagonGrid<H> {
  public verticalDistance: number;
  public horizontalDistance: number;

  constructor(params: IHexagonGridParams) {
    super(params);

    const hexagonHeight = this.hexagonSize * 2;
    const hexagonWidth = (Math.sqrt(3) / 2) * hexagonHeight;

    this.verticalDistance = (hexagonHeight * 3) / 4;
    this.horizontalDistance = hexagonWidth;
  }

  public axialToPoint(vector: AxialVector): Point {
    const q = vector.q;
    const r = vector.r;
    const x =
      this.hexagonSize *
      (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r) *
      this.scale.horizontal;
    const y = this.hexagonSize * (3 / 2) * r * this.scale.vertical;
    return new Point(x, y);
  }

  public pointToRoundAxial(point: Point): AxialVector {
    const x = point.x / this.scale.horizontal;
    const y = point.y / this.scale.vertical;
    const q = ((Math.sqrt(3) / 3) * x - (1 / 3) * y) / this.hexagonSize;
    const r = ((2 / 3) * y) / this.hexagonSize;
    return VectorMath.axialRound(new AxialVector(q, r));
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
    const neighborPositions = PointyTopGridTools.getHexagonNeighborsPositions(
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

  public getLine(
    start: AxialVector | CubeVector,
    end: AxialVector | CubeVector,
  ): { start: H | undefined; end: H | undefined; hexagons: H[] } {
    const startVector =
      start instanceof AxialVector ? VectorMath.axialToCube(start) : start;
    const endVector =
      end instanceof AxialVector ? VectorMath.axialToCube(end) : end;
    const vectors = VectorMath.cubeLine(startVector, endVector);
    return {
      end: this.getHexagon(end),
      hexagons: this.vectorsToHexagons(vectors),
      start: this.getHexagon(start),
    };
  }

  public getCircle(
    center: AxialVector | CubeVector,
    radius: number,
  ): { center: H | undefined; hexagons: H[] } {
    const centerVector =
      center instanceof AxialVector ? VectorMath.axialToCube(center) : center;
    const { vectors } = PointyTopGridTools.getCircle(centerVector, radius);
    return {
      center: this.getHexagon(center),
      hexagons: this.vectorsToHexagons(vectors),
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
