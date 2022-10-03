// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice. You can return the answer in any order.

// Example:
// input = [2,7,11,15], target = 9
// ouput = [0,1]

function twoSum(nums, target) { //  Using hash table 
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i
    }
};

console.log(twoSum([3, 4, 5, 2], 8));
console.log(twoSum([2, 9, 3, 7], 9));