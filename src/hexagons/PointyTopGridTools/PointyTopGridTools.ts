import { AxialVector, CubeVector, VectorMath } from "../../vectors";
import { GridTools } from "../GridTools";
import {
  PointyTopSide,
  pointyTopSideDirections,
} from "../PointyTopHexagonGrid";

export class PointyTopGridTools extends GridTools {
  public static getHexagonNeighborPosition(
    position: CubeVector,
    direction: PointyTopSide,
  ): CubeVector {
    const delta = pointyTopSideDirections.get(direction);
    if (delta) {
      return position.add(delta);
    } else {
      throw new Error(`Wrong direction ${direction}`);
    }
  }

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

  public static rotatePointyTopSide(
    direction: PointyTopSide,
    steps: number,
  ): PointyTopSide {
    const directions = [
      PointyTopSide.NORTH_EAST,
      PointyTopSide.EAST,
      PointyTopSide.SOUTH_EAST,
      PointyTopSide.SOUTH_WEST,
      PointyTopSide.WEST,
      PointyTopSide.NORTH_WEST,
    ];
    const startIndex = directions.indexOf(direction);
    const normalizedSteps = steps % directions.length;
    let index = startIndex + normalizedSteps;
    if (index < 0) {
      index += directions.length;
    } else if (index > directions.length - 1) {
      index -= directions.length;
    }
    return directions[index];
  }

  public static getCircle(
    center: CubeVector,
    radius: number,
  ): { center: CubeVector; vectors: CubeVector[] } {
    const vectors: CubeVector[] = [];
    pointyTopSideDirections.forEach((direction, side) => {
      let cube = center.add(direction.multiply(radius));
      for (let j = 0; j < radius; j++) {
        cube = PointyTopGridTools.getHexagonNeighborPosition(
          cube,
          PointyTopGridTools.rotatePointyTopSide(side, 2),
        );
        vectors.push(cube);
      }
    });
    return { center, vectors };
  }

  public static getCircleSegment(
    center: CubeVector,
    radius: number,
    direction: PointyTopSide,
  ): { start: CubeVector; vectors: CubeVector[] } {
    const vectors: CubeVector[] = [];
    const delta = pointyTopSideDirections.get(direction);
    if (!delta) {
      throw new Error(`Wrong direction ${direction}`);
    }

    let cube = center.add(delta.multiply(radius));
    vectors.push(cube);
    for (let j = 0; j < radius; j++) {
      cube = PointyTopGridTools.getHexagonNeighborPosition(
        cube,
        PointyTopGridTools.rotatePointyTopSide(direction, 2),
      );
      vectors.push(cube);
    }
    return { start: center, vectors };
  }

  public static getfillTriangle(
    startVertex: CubeVector,
    radius: number,
    direction: PointyTopSide,
  ): {
    startVertex: CubeVector;
    oppositeVertices: CubeVector[];
    vertices: CubeVector[];
    vectors: CubeVector[];
  } {
    let vectors: CubeVector[] = [];
    const vertices: CubeVector[] = [];
    const oppositeVertices: CubeVector[] = [];
    for (let i = 1; i <= radius; i++) {
      const { vectors: segmentVectors } = PointyTopGridTools.getCircleSegment(
        startVertex,
        i,
        direction,
      );
      if (i !== radius) {
        vectors = vectors.concat(segmentVectors);
      } else {
        vectors = vectors.concat(
          segmentVectors.slice(1, segmentVectors.length - 1),
        );
        vertices.push(
          startVertex,
          segmentVectors[0],
          segmentVectors[segmentVectors.length - 1],
        );
        oppositeVertices.push(
          segmentVectors[0],
          segmentVectors[segmentVectors.length - 1],
        );
      }
    }
    return { startVertex, oppositeVertices, vectors, vertices };
  }

  public static getTriangle(
    startVertex: CubeVector,
    radius: number,
    direction: PointyTopSide,
  ): {
    startVertex: CubeVector;
    oppositeVertices: CubeVector[];
    vectors: CubeVector[];
    vertices: CubeVector[];
  } {
    let vectors: CubeVector[] = [];
    const vertices: CubeVector[] = [];
    const oppositeVertices: CubeVector[] = [];
    for (let i = 1; i <= radius; i++) {
      const { vectors: segmentVectors } = PointyTopGridTools.getCircleSegment(
        startVertex,
        i,
        direction,
      );
      if (i !== radius) {
        vectors.push(
          segmentVectors[0],
          segmentVectors[segmentVectors.length - 1],
        );
      } else {
        vectors = vectors.concat(
          segmentVectors.slice(1, segmentVectors.length - 1),
        );
        vertices.push(
          startVertex,
          segmentVectors[0],
          segmentVectors[segmentVectors.length - 1],
        );
        oppositeVertices.push(
          segmentVectors[0],
          segmentVectors[segmentVectors.length - 1],
        );
      }
    }
    return { startVertex, oppositeVertices, vectors, vertices };
  }

  public static getFillCircle(
    center: CubeVector,
    radius: number,
  ): { center: CubeVector; vectors: CubeVector[] } {
    let vectors: CubeVector[] = [];
    for (let i = 1; i <= radius; i++) {
      const { vectors: circleVectors } = PointyTopGridTools.getCircle(
        center,
        i,
      );
      vectors = vectors.concat(circleVectors);
    }
    return { center, vectors };
  }
}
