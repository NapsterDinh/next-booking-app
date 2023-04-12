import { randomBytes } from "crypto";

/**
 * 指定桁数で hex ランダム値を返す
 */
export const setRandomBytes = (length: number): string => {
  return randomBytes(length).toString("hex").substring(0, length);
};
