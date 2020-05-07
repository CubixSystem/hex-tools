import "jest-extended";
import { AxialVector } from "./AxialVector";

describe("AxialVector", () => {
  it("should add", () => {
    expect(AxialVector.add).toBeFunction();
    expect(AxialVector.prototype.add).toBeFunction();

    const vectorA = new AxialVector(1, 2);
    const vectorB = new AxialVector(2, 3);

    let result = AxialVector.add(vectorA, vectorB);

    expect(result).toBeInstanceOf(AxialVector);
    expect(result.q).toBe(3);
    expect(result.r).toBe(5);

    result = vectorA.add(vectorB);

    expect(result).toBeInstanceOf(AxialVector);
    expect(result.q).toBe(3);
    expect(result.r).toBe(5);
  });

  it("should subtract", () => {
    expect(AxialVector.subtract).toBeFunction();
    expect(AxialVector.prototype.subtract).toBeFunction();

    const vectorA = new AxialVector(4, 2);
    const vectorB = new AxialVector(2, 1);

    let result = AxialVector.subtract(vectorA, vectorB);

    expect(result).toBeInstanceOf(AxialVector);
    expect(result.q).toBe(2);
    expect(result.r).toBe(1);

    result = vectorA.subtract(vectorB);

    expect(result).toBeInstanceOf(AxialVector);
    expect(result.q).toBe(2);
    expect(result.r).toBe(1);
  });

  it("should multiply", () => {
    expect(AxialVector.multiply).toBeFunction();
    expect(AxialVector.prototype.multiply).toBeFunction();

    const vector = new AxialVector(1, 1);

    let result = AxialVector.multiply(vector, 3);

    expect(result).toBeInstanceOf(AxialVector);
    expect(result.q).toBe(3);
    expect(result.r).toBe(3);

    result = vector.multiply(3);

    expect(result).toBeInstanceOf(AxialVector);
    expect(result.q).toBe(3);
    expect(result.r).toBe(3);
  });

  it("should isEqual", () => {
    expect(AxialVector.isEqual).toBeFunction();
    expect(AxialVector.prototype.isEqual).toBeFunction();

    const vectorA = new AxialVector(0, 0);
    const vectorB = new AxialVector(0, 0);
    const vectorC = new AxialVector(0, 1);

    expect(AxialVector.isEqual(vectorA, vectorB)).toBe(true);
    expect(AxialVector.isEqual(vectorA, vectorC)).toBe(false);

    expect(vectorA.isEqual(vectorB)).toBe(true);
    expect(vectorA.isEqual(vectorC)).toBe(false);
  });
});
