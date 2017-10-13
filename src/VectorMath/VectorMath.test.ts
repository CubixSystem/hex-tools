import { AxialVector } from "./../AxialVector";
import { CubeVector } from "./../CubeVector";
import { VectorMath } from "./VectorMath";

describe("VectorMath", () => {
  it("should convert from axial to cube coordinates", () => {
    const vector = VectorMath.axialToCube(new AxialVector(1, 2));
    vector.should.be.an("object");
    vector.q.should.equals(1);
    vector.r.should.equals(2);
    vector.s.should.equals(-3);
  });

  it("should convert from cube to axial coordinates", () => {
    const vector = VectorMath.cubeToAxial(new CubeVector(1, 2, 3));
    vector.should.be.an("object");
    vector.q.should.equals(1);
    vector.r.should.equals(2);
  });

  it("should calculate distance between 2 cube vectors", () => {
    const distance = VectorMath.cubeDistance(
      new CubeVector(1, 1, 1),
      new CubeVector(3, 3, 3),
    );
    distance.should.be.a("number");
    distance.should.equals(2);
  });

  it("should calculate distance between 2 axial vectors", () => {
    const distance = VectorMath.axialDistance(
      new AxialVector(1, 1),
      new AxialVector(3, 3),
    );
    distance.should.be.a("number");
    distance.should.equals(4);
  });

  it("should round cube coordinates", () => {
    let vector = VectorMath.cubeRound(new CubeVector(1.4, 2.4, 3.4));
    vector.should.be.an("object");
    vector.q.should.equals(1);
    vector.r.should.equals(2);
    vector.s.should.equals(-3);

    vector = VectorMath.cubeRound(new CubeVector(1.6, 2.6, 3.6));
    vector.should.be.an("object");
    vector.q.should.equals(2);
    vector.r.should.equals(3);
    vector.s.should.equals(-5);
  });

  it("should round axial coordinates", () => {
    let vector = VectorMath.axialRound(new AxialVector(1.4, 2.4));
    vector.should.be.an("object");
    vector.q.should.equals(1);
    vector.r.should.equals(3);

    vector = VectorMath.axialRound(new AxialVector(1.6, 2.6));
    vector.should.be.an("object");
    vector.q.should.equals(2);
    vector.r.should.equals(2);
  });
});
