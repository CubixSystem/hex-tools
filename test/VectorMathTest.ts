import { expect } from 'chai';
import 'mocha';

import { AxialVector } from '../src/AxialVector';
import { CubeVector } from '../src/CubeVector';
import { VectorMath } from '../src/VectorMath';

describe('axialToCube', () => {
  it(``, () => {
    const vector = VectorMath.axialToCube(new AxialVector(1, 2));
    expect(vector).to.be.a('object');
    expect(vector.q).equals(1);
    expect(vector.r).equals(2);
    expect(vector.s).equals(-3);
  });
});

describe('cubeToAxial', () => {
  it(``, () => {
    const vector = VectorMath.cubeToAxial(new CubeVector(1, 2, 3));
    expect(vector).to.be.a('object');
    expect(vector.q).equals(1);
    expect(vector.r).equals(2);
  });
});

describe('cubeDistance', () => {
  it(``, () => {
    const distance = VectorMath.cubeDistance(new CubeVector(1, 1, 1), new CubeVector(3, 3, 3));
    expect(distance).to.be.a('number');
    expect(distance).equals(2);
  });
});

describe('axialDistance', () => {
  it(``, () => {
    const distance = VectorMath.axialDistance(new AxialVector(1, 1), new AxialVector(3, 3));
    expect(distance).to.be.a('number');
    expect(distance).equals(4);
  });
});

describe('cubeRoundFloor', () => {
  it(``, () => {
    const vector = VectorMath.cubeRound(new CubeVector(1.4, 2.4, 3.4));
    expect(vector).to.be.a('object');
    expect(vector.q).equals(1);
    expect(vector.r).equals(2);
    expect(vector.s).equals(-3);
  });
});

describe('cubeRoundTop', () => {
  it(``, () => {
    const vector = VectorMath.cubeRound(new CubeVector(1.6, 2.6, 3.6));
    expect(vector).to.be.a('object');
    expect(vector.q).equals(2);
    expect(vector.r).equals(3);
    expect(vector.s).equals(-5);
  });
});

describe('axialRoundFloor', () => {
  it(``, () => {
    const vector = VectorMath.axialRound(new AxialVector(1.4, 2.4));
    expect(vector).to.be.a('object');
    expect(vector.q).equals(1);
    expect(vector.r).equals(3);
  });
});

describe('axialRoundTop', () => {
  it(``, () => {
    const vector = VectorMath.axialRound(new AxialVector(1.6, 2.6));
    expect(vector).to.be.a('object');
    expect(vector.q).equals(2);
    expect(vector.r).equals(2);
  });
});
