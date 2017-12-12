import { AxialVector } from "./AxialVector";

describe("AxialVector", () => {
  it("should add", () => {
    AxialVector.add.should.be.a("function");
    AxialVector.prototype.add.should.be.a("function");

    const vectorA = new AxialVector(1, 2);
    const vectorB = new AxialVector(2, 3);

    let result = AxialVector.add(vectorA, vectorB);
    result.should.be.instanceof(AxialVector);
    result.q.should.equals(3);
    result.r.should.equals(5);

    result = vectorA.add(vectorB);
    result.should.be.instanceof(AxialVector);
    result.q.should.equals(3);
    result.r.should.equals(5);
  });

  it("should subtract", () => {
    AxialVector.subtract.should.be.a("function");
    AxialVector.prototype.subtract.should.be.a("function");

    const vectorA = new AxialVector(4, 2);
    const vectorB = new AxialVector(2, 1);

    let result = AxialVector.subtract(vectorA, vectorB);
    result.should.be.instanceof(AxialVector);
    result.q.should.equals(2);
    result.r.should.equals(1);

    result = vectorA.subtract(vectorB);
    result.should.be.instanceof(AxialVector);
    result.q.should.equals(2);
    result.r.should.equals(1);
  });

  it("should multiply", () => {
    AxialVector.multiply.should.be.a("function");
    AxialVector.prototype.multiply.should.be.a("function");

    const vector = new AxialVector(1, 1);
    let result = AxialVector.multiply(vector, 3);
    result.q.should.equals(3);
    result.r.should.equals(3);

    result = vector.multiply(3);
    result.should.be.instanceof(AxialVector);
    result.q.should.equals(3);
    result.r.should.equals(3);
  });

  it("should isEqual", () => {
    AxialVector.isEqual.should.be.a("function");
    AxialVector.prototype.isEqual.should.be.a("function");

    const vectorA = new AxialVector(0, 0);
    const vectorB = new AxialVector(0, 0);
    const vectorC = new AxialVector(0, 1);

    AxialVector.isEqual(vectorA, vectorB).should.equals(true);
    AxialVector.isEqual(vectorA, vectorC).should.equals(false);

    vectorA.isEqual(vectorB).should.equals(true);
    vectorA.isEqual(vectorC).should.equals(false);
  });
});
