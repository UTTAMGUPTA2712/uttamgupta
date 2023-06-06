// find array segment sum and biggest number in that segment for number of queries
processarray = [1, 2, 3, 4, 5, 6, 7];
arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < processarray.length; i++) {
    processarray[i] += processarray[i - 1];
}
function sum(index1, index2) {
    let size = processarray.length;
    if (index1 >= size || index2 >= size) {
        console.log("out of bound");
        return;
    }
    if (index1 > index2) {
        console.log("invalid input");
        return;
    }

    if (index1 != 0) {
        console.log("SUM:", processarray[index2] - processarray[index1 - 1]);
    } else {
        console.log("SUM:", processarray[index2]);
    }

    let ans =
        index1 == 0
            ? processarray[index1]
            : processarray[index1] - processarray[index1 - 1];
    while (index1 <= index2) {
        if (processarray[index1] - processarray[index1 - 1] > ans) {
            ans = processarray[index1] - processarray[index1 - 1];
        }
        index1++;
    }
    console.log("Biggest number in this range is :" + ans);
}
// function sum(index1, index2) {
//     let size = processarray.length;
//     if (index1 >= size || index2 >= size) {
//         console.log("out of bound");
//         return;
//     }
//     if (index1 > index2) {
//         console.log("invalid input");
//         return;
//     }
//     let sum=0
//     let ans=arr[index1]
//     while(index1 <= index2) {
//         sum+=arr[index1]
//         if(ans>arr[index1])ans=arr[index1]
//     }
//     console.log("SUM : ",sum)
//     console.log("Greatest number in this range is ",ans)
// }
sum(5, 5);
sum(2, 5);
sum(5, 2);
sum(4, 5);
sum(3, 84);
