// Question 6 -
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
// (i.e., from left to right, then right to left for the next level and alternate between).
// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
// Example 3:
// Input: root = []
// Output: []

function set(root) {
    // Edge case: when root node is empty
    if (!root) return [];
    
    // Initialize
    let result = [];
    let queue = [root];
    let level = 1;
    
    while (queue[0]) {
        let size = queue.length;
        let arr = [];
        
        while (size--) {
            let node = queue.shift(); // dequeue
            
            level % 2 ? arr.push(node.val) : arr.unshift(node.val);
            
            node.left && queue.push(node.left); // enqueue
            node.right && queue.push(node.right); // enqueue
        }
        
        result.push(arr);
        level++;
    }
    
    return result;
};