function twoSum(nums: number[], target: number): number[] {
  // const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j];
      if (num1 + num2 == target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumOptimized(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let difference = target - num1;
    if (map.has(difference)){
        let index = map.get(difference)!
        return [i, index];
    }
    map.set(num1, i);
  }
  return [];
}
