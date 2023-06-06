// Question3 -
// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

// Example 1:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:
// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]

// 00
// 01 10
// 02 11 20
// 12 21
// 22

mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// console.log(mat[1][0])

function zigzag(matix) {
    let ans = [];
    let count = 0;
    let sizem = matix.length;
    let sizen = matix[0].length;
    while (count <= sizem +sizen - 2) {
        for (let i = 0; i < sizem; i++) {
            for (let j = 0; j < sizen; j++) {
                if (i + j == count) {
                    ans.push(matix[i][j]);
                }
            }
        }
        count++;
    }
    return ans;
}
console.log(zigzag(mat));
