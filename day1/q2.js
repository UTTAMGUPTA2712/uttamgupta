function num(s){
    let a=[]
    for(let i in s){
        if(s[i]>=0){a.push(s[i])}
    }
    console.log(a)
}
num([1,3,2,-4,0])