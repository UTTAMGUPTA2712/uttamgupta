function isprime(n){
    for(let i=1;i*i<=n;i++){
        if(n%i==0){
            console.log("false")
        }
    }
    console.log("true")
}
isprime(12)
isprime(621)
isprime(13)
isprime(0)