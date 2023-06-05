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
}
function revstr(s){
    let low=0;
    let high=s.length-1
    a=Array.from(s)
    revarr(a)
    console.log(a.join(""))
}
revstr("jkhcis")