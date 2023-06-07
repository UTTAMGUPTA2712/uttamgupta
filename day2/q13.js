// Question 5 - 
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "(*)"
// Output: true
// Example 3:
// Input: s = "(*))"
// Output: true

function check(str){
    let bracket=[]
    let star=[]
    for(let i in str){
        if(str[i]=='(')bracket.push(i)
        else if(str[i]=="*")star.push(i)
        else {
            if(bracket.length>0)bracket.pop()
            else if(star.length>0)star.pop()
            else return false
        }
    }
    while(bracket.length){
        
        if(bracket.length!=star.length|| bracket[bracket.length-1]>star[star.length-1]){return false}
        else{
            bracket.pop()
            star.pop()
        }
    }
    return true
}
let str="(*"
console.log(check(str))