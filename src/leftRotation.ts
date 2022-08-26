"use strict";
/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

export default function rotateLeft(rotAmount: number, arr: number[]): number[] {
  const x = arr.splice(rotAmount);
  return x.concat(arr);
}
