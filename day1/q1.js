//Palindrome Algorithm

function palindrome(s) {
    let high = s.length - 1;
    let low = 0;
    while (low < high) {
        if (s[low] != s[high]) {
            console.log("false");
            return;
        }
        high--;
        low++;
    }
    console.log("true");
}
palindrome("shdbci");
palindrome("abcdcba");
