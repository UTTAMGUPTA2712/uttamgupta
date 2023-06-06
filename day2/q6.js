// Question 6 -
// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:
// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

function mergeSortRec(arr) {
    const length = arr.length;
    if (length === 1) {
        return arr;
    }
    const mid = Math.floor(length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(leftarr, rightarr){
    const result = [];

    let il = 0;
    let ir = 0;
    while (il < leftarr.length && ir < rightarr.length) {
        if (leftarr[il] < rightarr[ir]) {
            result.push(leftarr[il]);
            il++;
        } else {
            result.push(rightarr[ir]);
            ir++;
        }
    }
    while (il < leftarr.length) {
        result.push(leftarr[il]);
        il++;
    }
    while (ir < rightarr.length) {
        result.push(rightarr[ir]);
        ir++;
    }

    return result;
};
console.log(mergeSortRec([5,1,1,2,0,0]))