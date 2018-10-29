import { Hexagon } from "../../hexagons";
import { Tools } from "../../Tools";
import { AxialVector, CubeVector, Point } from "../../vectors";
import { GridGenerator } from "./GridGenerator";
import { HexagonGridType, IHexagonGridSize } from "./types";

export interface IHexagonGridParams {
  size: IHexagonGridSize;
  hexagonSize: number;
  type: HexagonGridType;
  scale?: { horizontal: number; vertical: number };
  origin?: Point;
}

export abstract class HexagonGrid<H extends Hexagon = Hexagon> {
  public static getDistance(hexagonA: Hexagon, hexagonB: Hexagon): number {
    return hexagonA.cubePosition.subtract(hexagonB.cubePosition).roundLength;
  }

  public readonly verticalDistance: number;
  public readonly horizontalDistance: number;
  public readonly size: IHexagonGridSize;
  public readonly hexagonSize: number;
  public readonly scale: { horizontal: number; vertical: number };
  public readonly origin: Point;
  public hexagons: Map<string, H> = new Map();
  public readonly type: HexagonGridType;

  protected readonly gridGenerator: GridGenerator<H>;

  constructor({ hexagonSize, size, type, scale, origin }: IHexagonGridParams) {
    const hexagonHeight = hexagonSize * 2;
    const hexagonWidth = (Math.sqrt(3) / 2) * hexagonHeight;

    this.hexagonSize = hexagonSize;
    this.verticalDistance = (hexagonHeight * 3) / 4;
    this.horizontalDistance = hexagonWidth;
    this.size = size;
    this.type = type;
    this.scale = scale ? scale : { horizontal: 1, vertical: 1 };
    this.origin = origin ? origin : new Point(0, 0);

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
  public abstract getHexagonNeighbors(position: AxialVector | CubeVector): H[];
  public abstract getHexagonNeighbor(
    position: AxialVector | CubeVector,
    direction: string,
  ): H | undefined;
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

  public getHexagon(position: AxialVector | CubeVector): H | undefined {
    const { q, r } = position;
    const hash = Tools.combineHashes(
      Tools.calculateHash(q),
      Tools.calculateHash(r),
    );
    return this.hexagons.get(hash);
  }

  protected vectorsToHexagons(vectors: Array<AxialVector | CubeVector>): H[] {
    return vectors.reduce(
      (hexagons, vector) => {
        const hexagon = this.getHexagon(vector);
        if (hexagon) {
          hexagons.push(hexagon);
        }
        return hexagons;
      },
      [] as H[],
    );
  }
}
