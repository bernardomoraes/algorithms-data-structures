import maxAreaOfIsland from "@src/maxAreaOfIsland";

describe("Max Area of Islands Problem", () => {
  it("Should return as expected on each test case", () => {
    const firstCase = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ];
    const firstCaseOutput = 6;
    const secondCase = [[0, 0, 0, 0, 0, 0, 0, 0]];
    const secondCaseOutput = 0;

    expect(maxAreaOfIsland(firstCase)).toEqual(firstCaseOutput);
    expect(maxAreaOfIsland(secondCase)).toEqual(secondCaseOutput);
  });
});
