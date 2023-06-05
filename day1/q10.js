// Reverse a string

function revarr(s) {
    let low = 0;
    let high = s.length - 1;
    while (low < high) {
        [s[low], s[high]] = [s[high], s[low]];
        low++;
        high--;
    }
}
function revstr(s) {
    a = Array.from(s);
    revarr(a);
    console.log(a.join(""));
}
revstr("jkhcis");
