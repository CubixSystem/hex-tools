import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";
import { Hexagon } from "../Hexagon";
import { Point } from "../Point";
import { Tools } from "../Tools";
import { VectorMath } from "../VectorMath";

export interface IHexagonGridSize {
  width: number;
  height: number;
}

export interface IHexagonGridParams {
  size: IHexagonGridSize;
  hexagonSize: number;
  type: HexagonGridType;
}

export enum HexagonGridType {
  PARALLELOGRAM,
  TRIANGLE,
  HEXAGON,
  RECTANGLE,
}

export abstract class HexagonGrid<H extends Hexagon> {
  public static distance(hexagonA: Hexagon, hexagonB: Hexagon) {
    return hexagonA.cubePosition.subtract(hexagonB.cubePosition).roundLength;
  }

  public readonly verticalDistance: number;
  public readonly horizontalDistance: number;
  public readonly size: IHexagonGridSize;
  public readonly hexagonSize: number;
  public hexagons: Map<string, H> = new Map();
  public readonly type: HexagonGridType;

  constructor(params: IHexagonGridParams) {
    const hexagonHeight = params.hexagonSize * 2;
    const hexagonWidth = Math.sqrt(3) / 2 * hexagonHeight;

    this.hexagonSize = params.hexagonSize;
    this.verticalDistance = hexagonHeight * 3 / 4;
    this.horizontalDistance = hexagonWidth;
    this.size = params.size;
    this.type = params.type;
  }

  public abstract axialToPoint(vector: AxialVector): Point;
  public abstract getHexagonNeighborPositions(position: (AxialVector | CubeVector)): CubeVector[];
  public abstract pointToAxial(point: Point): AxialVector;

  public insertHexagon(hexagon: H, position: (AxialVector | CubeVector)) {
    if (position instanceof AxialVector) {
      hexagon.axialPosition = position;
    } else {
      hexagon.axialPosition = VectorMath.cubeToAxial(position);
    }
    const hash = Tools.combineHashes(
      Tools.calculateHash(hexagon.axialPosition.q), Tools.calculateHash(hexagon.axialPosition.r));
    this.hexagons.set(hash, hexagon);
  }

  public removeHexagon(position: (AxialVector | CubeVector)) {
    const hash = Tools.combineHashes(
      Tools.calculateHash(position.q), Tools.calculateHash(position.r));
    this.hexagons.delete(hash);
  }

  public replaceHexagon(hexagon: H, position: (AxialVector | CubeVector)) {
    this.removeHexagon(position);
    this.insertHexagon(hexagon, position);
  }

  public getHexagon(position: (AxialVector | CubeVector)) {
    const hash = Tools.combineHashes(
      Tools.calculateHash(position.q), Tools.calculateHash(position.r));
    return this.hexagons.get(hash);
  }

  public getHexagonNeighbors(position: (AxialVector | CubeVector)) {
    const neighbors: H[] = [];
    const neighborPositions = this.getHexagonNeighborPositions(position);
    neighborPositions.forEach((neighborPosition) => {
      const hexagon = this.getHexagon(neighborPosition);
      if (hexagon) { neighbors.push(hexagon); }
    });
    return neighbors;
  }

  public generateGrid(factoryFunction: () => H) {
    switch (this.type) {
      case HexagonGridType.TRIANGLE:
        this.generateTriangleGrid(factoryFunction);
        break;
      case HexagonGridType.PARALLELOGRAM:
        this.generateParallelogramGrid(factoryFunction);
        break;
      case HexagonGridType.HEXAGON:
        this.generateHexagonGrid(factoryFunction);
        break;
      case HexagonGridType.RECTANGLE:
        this.generateRectangleGrid(factoryFunction);
        break;
    }
  }

  protected generateTriangleGrid(factoryFunction: () => H) {
    const size = this.size.width;
    for (let q = 0; q <= size; q++) {
      for (let r = 0; r < size - q; r++) {
        this.insertHexagon(factoryFunction.call(this), new AxialVector(q, r));
      }
    }

    // for (let q = 0; q <= size; q++) {
    //   for (let r = size - q; r < size; r++) {
    //     this.insertHexagon(factoryFunction.call(this), new AxialVector(q, r));
    //   }
    // }
  }

  protected generateParallelogramGrid(factoryFunction: () => H) {
    for (let j = 0; j <= this.size.width; j++) {
      for (let i = 0; i <= this.size.height; i++) {
        this.insertHexagon(factoryFunction.call(this), new CubeVector({ q: j, r: i }));
        // this.insertHexagon(factoryFunction.call(this), new CubeVector({ s: j, q: i }));
        // this.insertHexagon(factoryFunction.call(this), new CubeVector({ r: j, s: i }));
      }
    }
  }

  protected generateHexagonGrid(factoryFunction: () => H) {
    const mapRadius = this.size.width;
    for (let q = -mapRadius; q <= mapRadius; q++) {
      const r1 = Math.max(-mapRadius, -q - mapRadius);
      const r2 = Math.min(mapRadius, -q + mapRadius);
      for (let r = r1; r <= r2; r++) {
        this.insertHexagon(factoryFunction.call(this), new AxialVector(q, r));
      }
    }
  }

  protected generateRectangleGrid(factoryFunction: () => H) {
    for (let i = 0; i < this.size.height; i++) {
      const offset = Math.floor(i / 2);
      for (let j = -offset; j < this.size.width - offset; j++) {
        this.insertHexagon(factoryFunction.call(this), new AxialVector({ q: j, r: i }));
      }
    }
  }
}
