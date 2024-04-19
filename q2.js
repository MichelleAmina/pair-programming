// Solution to reverse linked list 
class Node {
    constructor(val) {
        this.val = val 
        this.next = null 
    }
}

const a  = new Node('A')
const b  = new Node('B')
const c  = new Node('C')
const d  = new Node('D')

a.next = b;
b.next = c;
c.next = d;

//  Null    a   ->   b   ->   c
//  prev   curr     next 
//  Null <-  a      b   ->   c
//  prev   curr    next 
//  Null <-  a  <-   b   ->   c
//          prev    curr    next 
//  Null <-  a  <-   b   ->   c
//                  prev    curr    next 


const reverseLinkedList = (head) => {
    let current = head
    let previous = null 

    while (current !== null){
        const next = current.next
        current.next = previous 
        previous = current
        current = next    
    }
    // previous becomes the new head of the Linked list 
    return previous 
    
}

console.log(reverseLinkedList(a))


// Leetcode question and solution (works on leetcode )
var reverseList = function(head) {
    //let [prev, current] = [null, head]
    //while(current){
    //    [current.next, prev, current] = [prev, current, current.next]
    //}
    //return prev
    let current = head
    let previous = null 

    while (current !== null){
        const next = current.next
        current.next = previous 
        previous = current
        current = next    
    }
    // previous becomes the new head of the Linked list 
    return previous 
};



