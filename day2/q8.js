// Question 8 -
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true

function helper(arr, string) {
    let helperarr = new Array(256).fill(0);
    for (let i = 0; i < string.length; i++) {
        arr[i] = helperarr[string.charCodeAt(i)];
        helperarr[string.charCodeAt(i)] = i;
    }
}
function isomorphic(string1, string2) {
    let arr1 = new Array(string1.length);
    let arr2 = new Array(string2.length);
    if (arr2.length != arr1.length) {
        console.log("false");
        return;
    }
    helper(arr1, string1);
    helper(arr2, string2);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            console.log("false");
            return;
        }
    }
    console.log("true");
}
isomorphic("egg", "add");
isomorphic("foo", "bar");
