import * as md5 from "md5";

export class Tools {
  public static combineHashes(hashA: string, hashB: string): string {
    return md5(`${hashA}:${hashB}`);
  }

  public static calculateHash(numberA: number): string {
    return md5(numberA.toString());
  }
}
