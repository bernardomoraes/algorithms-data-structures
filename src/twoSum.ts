let verifySum = (nums: number[], index: number, target: number) => {
  for (let i = index + 1; i< nums.length; i++) {
      if (nums[i] + nums[index] === target) {
          return [index, i]
      }
  }
  return []
  
}

export default function(nums: number[], target: number) {
  let output = []
  for (let i = 0; i < nums.length; i++) {
      output = verifySum(nums, i, target)
      if (output.length) return output
  }
};