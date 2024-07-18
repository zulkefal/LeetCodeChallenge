/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);

    }

    return [];
}

let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(nums1, target1)); 
