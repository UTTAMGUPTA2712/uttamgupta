function shift(s){
    let a=s[0]
    let i
    for(i=0;i<s.length;i++){
        s[i]=s[i+1]
    }
    s[i-1]=a
    console.log(s)
}

shift([3,1,5,34,45,2,54,23])