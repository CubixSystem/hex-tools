import "jest-extended";

import { Hexagon } from "../../hexagons";
import { AxialVector, CubeVector } from "../../vectors";

describe("Hexagon", () => {
  const hexagonParams = { position: new AxialVector(0, 0) };

  it("should check equality", () => {
    const hexagonA = new Hexagon(hexagonParams);
    const hexagonB = new Hexagon(hexagonParams);
    const hexagonC = new Hexagon({ position: new AxialVector(1, 1) });

    expect(Hexagon.isEqual).toBeFunction();

    expect(Hexagon.isEqual(hexagonA, hexagonA)).toBe(true);
    expect(Hexagon.isEqual(hexagonA, hexagonB)).toBe(true);
    expect(Hexagon.isEqual(hexagonA, hexagonC)).toBe(false);

    expect(Hexagon.isEqual(hexagonB, hexagonA)).toBe(true);
    expect(Hexagon.isEqual(hexagonB, hexagonB)).toBe(true);
    expect(Hexagon.isEqual(hexagonB, hexagonC)).toBe(false);

    expect(Hexagon.isEqual(hexagonC, hexagonA)).toBe(false);
    expect(Hexagon.isEqual(hexagonC, hexagonB)).toBe(false);
    expect(Hexagon.isEqual(hexagonC, hexagonC)).toBe(true);

    expect(hexagonA.isEqual).toBeFunction();

    expect(hexagonA.isEqual(hexagonA)).toBe(true);
    expect(hexagonA.isEqual(hexagonB)).toBe(true);
    expect(hexagonA.isEqual(hexagonC)).toBe(false);

    expect(hexagonB.isEqual).toBeFunction();

    expect(hexagonB.isEqual(hexagonA)).toBe(true);
    expect(hexagonB.isEqual(hexagonB)).toBe(true);
    expect(hexagonB.isEqual(hexagonC)).toBe(false);

    expect(hexagonC.isEqual).toBeFunction();

    expect(hexagonC.isEqual(hexagonA)).toBe(false);
    expect(hexagonC.isEqual(hexagonB)).toBe(false);
    expect(hexagonC.isEqual(hexagonC)).toBe(true);
  });

  it("should have position in CubeVector form", () => {
    const hexagon = new Hexagon(hexagonParams);
    expect(hexagon.cubePosition).toBeInstanceOf(CubeVector);
  });

  it("should have position in AxialVector form", () => {
    const hexagon = new Hexagon(hexagonParams);
    expect(hexagon.axialPosition).toBeInstanceOf(AxialVector);
  });
});
