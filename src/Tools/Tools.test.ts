import { Tools } from "./Tools";

describe("Tools", () => {
  it("should calculate hash", () => {
    Tools.calculateHash.should.be.a("function");
    const resultHash = Tools.calculateHash(55);
    resultHash.should.be.a("string");
    resultHash.should.equals("b53b3a3d6ab90ce0268229151c9bde11");
  });

  it("should combine hashes", () => {
    Tools.combineHashes.should.be.a("function");
    const resultHash = Tools.combineHashes("aa", "bb");
    resultHash.should.be.a("string");
    resultHash.should.equals("3a2f6b6d8b508509996c50df7031e53d");
  });
});
