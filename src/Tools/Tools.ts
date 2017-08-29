import * as md5 from "md5";

export class Tools {
  public static combineHashes(hashA: string, hashB: string) {
    return md5(`${hashA}:${hashB}`);
  }

  public static calculateHash(numberA: number) {
    return md5(numberA.toString());
  }
}
