import { AxialVector, CubeVector } from "../../vectors";
import { Hexagon } from "../Hexagon";
import { HexagonGrid } from "../HexagonGrid";

export class GridTools {
  public static floodScan(
    start: AxialVector | CubeVector,
    grid: HexagonGrid,
    checkFunction: (hexagon: Hexagon) => boolean,
    cb: (hexagon: Hexagon) => void,
  ): void {
    const frontier = [start];
    const visited = new Set([start]);

    while (frontier.length > 0) {
      const current = frontier.pop();
      if (current) {
        grid.getHexagonNeighbors(current).forEach(hexagon => {
          if (!visited.has(hexagon.axialPosition) && checkFunction(hexagon)) {
            frontier.push(hexagon.axialPosition);
            visited.add(hexagon.axialPosition);
            cb(hexagon);
          }
        });
      }
    }
  }
}
