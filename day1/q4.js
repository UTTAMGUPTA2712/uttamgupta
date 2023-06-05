// Print the first 10 Fibonacci numbers without recursion

function fib() {
    let i = 0;
    let j = 1;
    for (let n = 0; n < 10; n++) {
        console.log(i);
        let k = j;
        j = i + j;
        i = k;
    }
}
fib();
