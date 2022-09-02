import floodFill from "@src/floodFill";

describe("Flood Fill", () => {
  const cases = [
    [
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2,
      [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    ],
    [
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0,
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
  ];
  it.each(cases)(
    "Given %s, %p, %p and %p as arguments, returns %p",
    (
      matrix: number[][],
      sr: number,
      sc: number,
      newColor: number,
      expected: number[][]
    ) => {
      expect(floodFill(matrix, sr, sc, newColor)).toEqual(expected);
    }
  );
});
