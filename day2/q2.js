// Question2 - Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.
// A substring is a contiguous sequence of characters within a string
// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substrings of "leetcode".

// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is a substring of another string.


var set=new Set();
function subStringHelper(index,string){
    for(let i in string){
        let a=""
        for(let j=i;j<string.length;j++){
            if(i==0 && j==string.length-1){continue}
            a+=string[j]
            set.add(a)
        }
    }
}
function subStrings(strings){
    for(let i in strings){
        subStringHelper(i,strings[i]);
    }
    let ans=[]
    for(let i in strings){
        if(set.has(strings[i])){
            ans.push(strings[i]);
        }
    }
    
    // for(let i=0;i<strings.length;i++){
    //     for(let j=0;j<strings.length;j++){
    //         if(strings[i].includes(strings[j])){
    //             ans.push(strings[i])
    //             break
    //         }
    //     }
    // }
    console.log(ans)
}
subStrings(["leetcode","et","code"])