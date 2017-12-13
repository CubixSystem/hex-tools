// tslint:disable:no-unused-expression

import { Hexagon } from "../../hexagons";
import { AxialVector, CubeVector } from "../../vectors";

describe("Hexagon", () => {
  const hexagonParams = { position: new AxialVector(0, 0), size: 5 };

  it("should check equality", () => {
    const hexagonA = new Hexagon(hexagonParams);
    const hexagonB = new Hexagon(hexagonParams);
    const hexagonC = new Hexagon({ position: new AxialVector(1, 1), size: 5 });

    Hexagon.isEqual.should.be.a("function");
    Hexagon.isEqual(hexagonA, hexagonA).should.be.true;
    Hexagon.isEqual(hexagonA, hexagonB).should.be.true;
    Hexagon.isEqual(hexagonA, hexagonC).should.be.false;

    Hexagon.isEqual(hexagonB, hexagonA).should.be.true;
    Hexagon.isEqual(hexagonB, hexagonB).should.be.true;
    Hexagon.isEqual(hexagonB, hexagonC).should.be.false;

    Hexagon.isEqual(hexagonC, hexagonA).should.be.false;
    Hexagon.isEqual(hexagonC, hexagonB).should.be.false;
    Hexagon.isEqual(hexagonC, hexagonC).should.be.true;

    hexagonA.isEqual.should.be.a("function");
    hexagonA.isEqual(hexagonA).should.be.true;
    hexagonA.isEqual(hexagonB).should.be.true;
    hexagonA.isEqual(hexagonC).should.be.false;

    hexagonB.isEqual.should.be.a("function");
    hexagonB.isEqual(hexagonA).should.be.true;
    hexagonB.isEqual(hexagonB).should.be.true;
    hexagonB.isEqual(hexagonC).should.be.false;

    hexagonC.isEqual.should.be.a("function");
    hexagonC.isEqual(hexagonA).should.be.false;
    hexagonC.isEqual(hexagonB).should.be.false;
    hexagonC.isEqual(hexagonC).should.be.true;
  });

  it("should have position in CubeVector form", () => {
    const hexagon = new Hexagon(hexagonParams);
    hexagon.cubePosition.should.be.instanceof(CubeVector);
  });

  it("should have position in AxialVector form", () => {
    const hexagon = new Hexagon(hexagonParams);
    hexagon.axialPosition.should.be.instanceof(AxialVector);
  });
});
