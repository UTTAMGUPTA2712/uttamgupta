// Find the maximum number in an array of numbers

function max(s) {
    let ans = s[0];
    for (let i in s) {
        if (s[i] > ans) {
            ans = s[i];
        }
    }
    console.log(ans);
}
max([3, 65, 1, 64, 112, -5]);
