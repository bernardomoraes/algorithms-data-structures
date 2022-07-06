import twoSum from "@src/twoSum";

const cases = [
  [[2,7,11,15], 9, [0,1]],
  [[3,2,4], 6, [1,2]],
  [[3,3], 6, [0,1]]
]
describe("Two Sum Problem", () => {
  it.concurrent.each(cases)(
    "Given %p and %p as arguments, returns %p",         
    (firstArg: Array<number>, secondArg: number, expectedResult: Array<number>) => {
      const result = twoSum(firstArg, secondArg);
      expect(result).toEqual(expectedResult);
    }
  )
});
