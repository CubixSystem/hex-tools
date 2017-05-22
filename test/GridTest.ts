import { expect } from 'chai';
import 'mocha';

// import { AxialVector } from '../src/AxialVector';
// import { CubeVector } from '../src/CubeVector';
import { Grid } from '../src/Grid';
import { Hexagon } from '../src/Hexagon';

describe('Calculate neighbor position', () => {
  it(`Should return neighbor position`, () => {
    const vector = Grid.neighborPosition(new Hexagon({ q: 0, r: 0, s: 0, size: 10 }), 1);
    expect(vector).to.be.a('object');
    expect(vector.q).equals(1);
    expect(vector.r).equals(-1);
    expect(vector.s).equals(0);
  });
});

describe('Calculate distance between hexagons', () => {
  it(`Should return number of hexagons between targets`, () => {
    const distance = Grid.distance(new Hexagon({ q: 0, r: 0, s: 0, size: 10 }),
      new Hexagon({ q: 3, r: 1, s: 0, size: 10 }));
    expect(distance).to.be.a('number');
    expect(distance).equals(4);
  });
});
