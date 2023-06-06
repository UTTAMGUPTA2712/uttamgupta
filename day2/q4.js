// Question 4 - Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

// Constraints:
// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

function elements(array) {
    let size = array.length;
    let neededsize = size / 3;
    let ans = [];
    let map = new Map();
    for (let i in array) {
        if (!map[array[i]]) {
            map[array[i]] = 1;
        } else {
            map[array[i]]++;
        }
    }
    // console.log(map);
    for (let [key, value] of Object.entries(map)) {
        if (value > neededsize) {
            ans.push(key);
        }
    }
    console.log(ans);
}
elements([3, 2, 3]);
