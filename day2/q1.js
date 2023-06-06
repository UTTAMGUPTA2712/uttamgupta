// Question1 - You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if the target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

function search(matrix,target){
    let low=0,high=matrix.length;
    // console.log(matrix[0][0]);
    while(low<high){
        let mid=Math.trunc(low+(high-low)/2);
        // console.log(mid);
        if(matrix[mid][0]==target){
            console.log("true");
            return;
        }
        if(matrix[mid][0]<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    let row=low;
    low=0,high=matrix[0].length-1;
    while(low<high){
        let mid=Math.trunc(low+(high-low)/2);
        if(matrix[row][mid]==target){
            console.log("true");
            return;
        }
        if(matrix[row][mid]<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    console.log("false");
    return;
}
m=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
search([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13)
// console.log(m[1][0]);