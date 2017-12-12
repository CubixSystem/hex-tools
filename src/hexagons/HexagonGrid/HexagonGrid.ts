import { Hexagon } from "@hexagons";
import { Tools } from "@tools";
import { AxialVector, CubeVector, Point } from "@vectors";
import { GridGenerator } from "./GridGenerator";
import { HexagonGridType, IHexagonGridSize } from "./types";

export interface IHexagonGridParams {
  size: IHexagonGridSize;
  hexagonSize: number;
  type: HexagonGridType;
}

export abstract class HexagonGrid<H extends Hexagon> {
  public static distance(hexagonA: Hexagon, hexagonB: Hexagon): number {
    return hexagonA.cubePosition.subtract(hexagonB.cubePosition).roundLength;
  }

  public readonly verticalDistance: number;
  public readonly horizontalDistance: number;
  public readonly size: IHexagonGridSize;
  public readonly hexagonSize: number;
  public hexagons: Map<string, H> = new Map();
  public readonly type: HexagonGridType;

  protected readonly gridGenerator: GridGenerator<H>;

  constructor(params: IHexagonGridParams) {
    const hexagonHeight = params.hexagonSize * 2;
    const hexagonWidth = Math.sqrt(3) / 2 * hexagonHeight;

    this.hexagonSize = params.hexagonSize;
    this.verticalDistance = hexagonHeight * 3 / 4;
    this.horizontalDistance = hexagonWidth;
    this.size = params.size;
    this.type = params.type;

    this.gridGenerator = new GridGenerator({
      insertHexagonFunction: this.insertHexagon.bind(this),
      size: this.size,
      type: this.type,
    });
  }

  public fillGrid(factoryFunction: (position: AxialVector) => H): void {
    this.gridGenerator.fillGrid(factoryFunction);
  }

  public abstract axialToPoint(vector: AxialVector): Point;
  public abstract getHexagonNeighborsPositions(
    position: AxialVector | CubeVector,
  ): CubeVector[];
  public abstract pointToRoundAxial(point: Point): AxialVector;

  /**
   * @throws Will throw an error if hexagon with provided coordinates already exist
   */
  public insertHexagon(hexagon: H, position: AxialVector | CubeVector): void {
    if (position instanceof CubeVector) {
      hexagon.cubePosition = position;
    } else if (position instanceof AxialVector) {
      hexagon.axialPosition = position;
    } else {
      throw new TypeError(
        `Wrong position: ${position}, expect AxialVector or CubeVector`,
      );
    }

    const { q, r } = hexagon.axialPosition;
    const hash = Tools.combineHashes(
      Tools.calculateHash(q),
      Tools.calculateHash(r),
    );
    if (this.hexagons.get(hash)) {
      throw new Error(`Hexagon ${q}:${r} already exist`);
    }
    this.hexagons.set(hash, hexagon);
  }

  public removeHexagon(position: AxialVector | CubeVector): void {
    const { q, r } = position;
    const hash = Tools.combineHashes(
      Tools.calculateHash(q),
      Tools.calculateHash(r),
    );
    this.hexagons.delete(hash);
  }

  public replaceHexagon(hexagon: H, position: AxialVector | CubeVector): void {
    this.removeHexagon(position);
    this.insertHexagon(hexagon, position);
  }

  /** @throws Will throw an error if hexagon with provided coordinates not exist */
  public getHexagon(position: AxialVector | CubeVector): H {
    const { q, r } = position;
    const hash = Tools.combineHashes(
      Tools.calculateHash(q),
      Tools.calculateHash(r),
    );
    const hexagon = this.hexagons.get(hash);
    if (!hexagon) {
      throw new Error(`Hexagon with coordinates ${q}:${r} not found`);
    } else {
      return hexagon;
    }
  }

  public getHexagonNeighbors(position: AxialVector | CubeVector): H[] {
    const neighbors: H[] = [];
    const neighborPositions = this.getHexagonNeighborsPositions(position);
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
