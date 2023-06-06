// Question 7 - 

// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.
// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:
// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

function smallestset(list1, list2) {
    let map=new Map()
    for(let i=0; i<list1.length;i++){
        if(!map[list1[i]]){
            map[list1[i]]=-i-1
        }
    }
    for(let i=0; i<list2.length;i++){
        if(map[list2[i]]&& map[list2[i]]<0){
            map[list2[i]]=map[list2[i]]*-1+i-1
        }
    }
    let smallestnum=Number.MAX_VALUE
    for(let [key, value] of Object.entries(map)){
        if(smallestnum>value&&value>=0){
            smallestnum=value
        }
    }
    let ans=[]
    for(let [key, value] of Object.entries(map)){
        if(smallestnum==value){
            ans.push(key)
        }
    }
    console.log(ans)
}
smallestset(["Shogun","Tapioca Express","Burger King","KFC"],  ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])
smallestset(["happy","sad","good"],  ["sad","happy","good"])