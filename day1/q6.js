// Print the first 100 prime numbers

function isprime(n) {
    if (n == 0) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
let i = 1;
let count = 0;
while (count < 100) {
    if (isprime(i)) {
        console.log(i);
        count++;
    }
    i++;
}
