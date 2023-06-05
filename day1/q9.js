function revarr(s){
    let low=0;
    let high=s.length-1
    while(low<high){
        let c=s[low]
        s[low]=s[high]
        s[high]=c
        low++
        high--
    }
    console.log(s)
}
revarr([3,1,5,34,45,2,54,23])