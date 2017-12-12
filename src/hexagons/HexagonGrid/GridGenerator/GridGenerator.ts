import { Hexagon } from "@hexagons";
import { AxialVector, CubeVector, VectorMath } from "@vectors";
import { HexagonGridType, IHexagonGridSize } from "../types";

export interface IGridGeneratorParams<H extends Hexagon> {
  size: IHexagonGridSize;
  type: HexagonGridType;
  insertHexagonFunction: (
    hexagon: H,
    position: AxialVector | CubeVector,
  ) => void;
}

export class GridGenerator<H extends Hexagon> {
  protected readonly size: IHexagonGridSize;
  protected readonly type: HexagonGridType;
  protected readonly insertHexagon: (
    hexagon: H,
    position: AxialVector | CubeVector,
  ) => void;

  constructor(params: IGridGeneratorParams<H>) {
    this.size = params.size;
    this.type = params.type;
    this.insertHexagon = params.insertHexagonFunction;
  }

  public fillGrid(factoryFunction: (position: AxialVector) => H): void {
    switch (this.type) {
      case HexagonGridType.TRIANGLE:
        this.fillTriangleGrid(factoryFunction);
        break;
      case HexagonGridType.PARALLELOGRAM:
        this.fillParallelogramGrid(factoryFunction);
        break;
      case HexagonGridType.HEXAGON:
        this.fillHexagonGrid(factoryFunction);
        break;
      case HexagonGridType.RECTANGLE:
        this.fillRectangleGrid(factoryFunction);
        break;
    }
  }

  protected fillTriangleGrid(
    factoryFunction: (position: AxialVector) => H,
  ): void {
    const size = this.size.width;
    for (let q = 0; q <= size; q++) {
      for (let r = 0; r < size - q; r++) {
        const position = new AxialVector(q, r);
        this.insertHexagon(factoryFunction.call(this, position), position);
      }
    }

    // for (let q = 0; q <= size; q++) {
    //   for (let r = size - q; r < size; r++) {
    //     this.insertHexagon(factoryFunction.call(this), new AxialVector(q, r));
    //   }
    // }
  }

  protected fillParallelogramGrid(
    factoryFunction: (position: AxialVector) => H,
  ): void {
    for (let j = 0; j <= this.size.width; j++) {
      for (let i = 0; i <= this.size.height; i++) {
        const position = new CubeVector({ q: j, r: i });
        this.insertHexagon(
          factoryFunction.call(this, VectorMath.cubeToAxial(position)),
          position,
        );
        // this.insertHexagon(factoryFunction.call(this), new CubeVector({ s: j, q: i }));
        // this.insertHexagon(factoryFunction.call(this), new CubeVector({ r: j, s: i }));
      }
    }
  }

  protected fillHexagonGrid(
    factoryFunction: (position: AxialVector) => H,
  ): void {
    const mapRadius = this.size.width;
    for (let q = -mapRadius; q <= mapRadius; q++) {
      const r1 = Math.max(-mapRadius, -q - mapRadius);
      const r2 = Math.min(mapRadius, -q + mapRadius);
      for (let r = r1; r <= r2; r++) {
        const position = new AxialVector(q, r);
        this.insertHexagon(factoryFunction.call(this, position), position);
      }
    }
  }

  protected fillRectangleGrid(
    factoryFunction: (position: AxialVector) => H,
  ): void {
    for (let i = 0; i < this.size.height; i++) {
      const offset = Math.floor(i / 2);
      for (let j = -offset; j < this.size.width - offset; j++) {
        const position = new AxialVector({ q: j, r: i });
        this.insertHexagon(factoryFunction.call(this, position), position);
      }
    }
  }
}
