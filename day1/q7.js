// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function nprime(n, startat) {
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
    let i = startat;
    let count = 0;
    while (count < n) {
        if (isprime(i)) {
            console.log(i);
            count++;
        }
        i++;
    }
}
nprime(65, 54);
