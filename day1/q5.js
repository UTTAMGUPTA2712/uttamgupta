// Create a function that will return a Boolean specifying if a number is prime

function isprime(n) {
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            console.log("false");
            return;
        }
    }
    console.log("true");
}
isprime(12);
isprime(621);
isprime(13);
isprime(0);
