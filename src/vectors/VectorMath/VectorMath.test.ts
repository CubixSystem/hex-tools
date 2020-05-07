import "jest-extended";

import { AxialVector } from "../AxialVector";
import { CubeVector } from "../CubeVector";
import { VectorMath } from "./VectorMath";

describe("VectorMath", () => {
  it("should convert from axial to cube coordinates", () => {
    const vector = VectorMath.axialToCube(new AxialVector(1, 2));

    expect(vector).toBeInstanceOf(CubeVector);
    expect(vector.q).toBe(1);
    expect(vector.r).toBe(2);
    expect(vector.s).toBe(-3);
  });

  it("should convert from cube to axial coordinates", () => {
    const vector = VectorMath.cubeToAxial(new CubeVector(1, 2, 3));

    expect(vector).toBeInstanceOf(AxialVector);
    expect(vector.q).toBe(1);
    expect(vector.r).toBe(2);
  });

  it("should calculate distance between 2 cube vectors", () => {
    const distance = VectorMath.cubeDistance(
      new CubeVector(1, 1, 1),
      new CubeVector(3, 3, 3),
    );

    expect(distance).toBeNumber();
    expect(distance).toBe(2);
  });

  it("should calculate distance between 2 axial vectors", () => {
    const distance = VectorMath.axialDistance(
      new AxialVector(1, 1),
      new AxialVector(3, 3),
    );

    expect(distance).toBeNumber();
    expect(distance).toBe(4);
  });

  it("should round cube coordinates", () => {
    let vector = VectorMath.cubeRound(new CubeVector(1.4, 2.4, 3.4));

    expect(vector).toBeInstanceOf(CubeVector);
    expect(vector.q).toBe(1);
    expect(vector.r).toBe(2);
    expect(vector.s).toBe(-3);

    vector = VectorMath.cubeRound(new CubeVector(1.6, 2.6, 3.6));

    expect(vector).toBeInstanceOf(CubeVector);
    expect(vector.q).toBe(2);
    expect(vector.r).toBe(3);
    expect(vector.s).toBe(-5);
  });

  it("should round axial coordinates", () => {
    let vector = VectorMath.axialRound(new AxialVector(1.4, 2.4));

    expect(vector).toBeInstanceOf(AxialVector);
    expect(vector.q).toBe(1);
    expect(vector.r).toBe(3);

    vector = VectorMath.axialRound(new AxialVector(1.6, 2.6));

    expect(vector).toBeInstanceOf(AxialVector);
    expect(vector.q).toBe(2);
    expect(vector.r).toBe(2);
  });
});
