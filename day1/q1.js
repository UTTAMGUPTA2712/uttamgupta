function palindrome(s){
    let high=s.length-1
    let low=0
    while(low<high){
        if(s[low]!=s[high]){    
            console.log("false")
        }
        high--
        low++
    }
    console.log("true")
}
palindrome("shdbci")