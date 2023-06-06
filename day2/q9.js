// Question 1 - 
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 
// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]


// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]



class List {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
let ll=new List()
function add(prev_node , new_data) {
    while (prev_node&&prev_node.next) {
        prev_node=prev_node.next;
    }
    var new_node = new List(new_data);
    if(prev_node!=undefined){
    prev_node.next = new_node;}
    else{
prev_node=new_node
    }
}
function print(list){
    while (list) {
        console.log(list.value);
        list=list.next;
    }
}

let arr=[1,2,3,3,4,4,5]
for(let i=0;i<arr.length;i++){
    add(ll,arr[i])
}
// print(ll)
function heads(list){
    let ans=list
    prev=ans
    while(list&&list.next){
        if(list.value==list.next.value){
            console.log(list.value,"kdvbc")
            let num=list.value
            while(list && list.value==num){
                list=list.next
            }
            prev.next=list.next
            if(ans.value==num){
                ans.next=list
            }
        }
        else{
            list=list.next
        }
        prev=list
    }
    return ans
}

print(heads(ll.next))