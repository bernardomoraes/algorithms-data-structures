import rotateLeft from "@src/leftRotation";

describe("Left Rotation", () => {
  it("should return propperly", () => {
    const reponse = [5, 1, 2, 3, 4];
    const arr = [1, 2, 3, 4, 5];
    const rotAmount = 4;

    const result = rotateLeft(rotAmount, arr);

    expect(result).toEqual(reponse);
  });
});
