// circular array next greater element
arr = [12, 123, 2, 12, 32, 21, 223, 14];
function greater() {
    let size = arr.length;
    let largestIndex = 0;
    for (let i in arr) {
        if (arr[i] > arr[largestIndex]) {
            largestIndex = i;
        }
    }
    largestIndex = (largestIndex + 1) % size;
    largestIndex=0
    let s = [];
    s.push(arr[largestIndex]);
    for (
        let i = (largestIndex + 1) % size, j = 0;
        i < size;
        j++, i = (i + 1) % size
    ) {
        if (j == size) break;
        if (s.length == 0) {
            s.push(arr[i]);
            continue;
        }
        while (s.length != 0 && s[s.length - 1] < arr[i]) {
            console.log(s[s.length - 1] + " : " + arr[i]);
            s.pop();
        }
        s.push(arr[i]);
    }
}
greater();
