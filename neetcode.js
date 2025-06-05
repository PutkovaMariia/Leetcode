//Contains Duplicate
// const nums = [1, 2, 3, 3];
//
// function hasDuplicate(nums) {
//     return [...new Set(nums)].length !== nums.length;
// }
//
// console.log(hasDuplicate(nums));

//Valid Anagram
// const s = "bbcc";
// const t = "cbbc";
//
// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;
//     const count = {}
//     for (const char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (const char of t) {
//         count[char] = (count[char] || 0) - 1;
//         if (count[char] < 0) return false;
//     }
//     return true
// }
///////////////////////
//https://codeinterview.io/
//request closure, this, call/apply/bind, animation frame, counter, promise, pure function, webworker in browser, two way data binding, server side rendering
//create interesting pet project
//from interview below
// import { useCallback, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// const Child = React.memo((props) => {
//     return <div>1</div>
// })
//
// function App() {
//     const [count, setCount] = useState(0)
//
//     const h = useCallback(() => { }, [])
//
//     return (
//         <>
//             <div>
//                 <Child onClick={h}/>
//             </div>
//         </>
//     )
// }
//
// export default App
///////////////////////
// console.log(isAnagram(s, t));

//Two Sum
// const nums = [3, 1, 5, 6,4];
// const target = 7;
//
// function twoSum(nums, target) {
//     // for (let i = 0; i < nums.length; i++) {
//     //     for (let j = 1; j < nums.length; j++) {
//     //     if (nums[i]+nums[j] === target) {
//     //         return [i, j];
//     //     }
//     //     }
//     // }
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const difference = target - nums[i];
//         if (map.has(difference)) {
//             return [map.get(difference), i];
//         }
//         map.set(nums[i], i);
//     }
// }
//
// console.log(twoSum(nums, target));

//Valid Palindrome
// const s = "Was it a car or a cat I saw?";
//
// function isPalindrome(s) {
//    const cleanStr = s.toLowerCase().replace(/[\W_]+/g, '');
//    return cleanStr === [...cleanStr].reverse().join('')
// }
//
// console.log(isPalindrome(s));

//Valid Parentheses
// const bracesPairs = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
// };
// const s = "([{])}";
//
// function isValid(s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (['(', '[', '{'].includes(char)) {
//             stack.push(char);
//         } else if (stack.pop() !== bracesPairs[char]) {
//             return false;
//         }
//     }
//     return stack.length === 0;
// }
//
// console.log(isValid(s));

//Binary Search
// const nums = [5];
// const target = 5;
//
// function search(nums, target) {
//     //option 1
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (nums[i] === target) {
//     //         return i;
//     //     }
//     // }
//     // return -1;
//
//     //option 2
//     // return nums.findIndex((num) => num === target);
//
//     //option 3
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) return mid;
//         if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1
// }
//
// console.log(search(nums, target));

//Best Time to Buy and Sell Stock
// const prices = [5, 1, 5, 6, 7, 1, 10];
//
// function maxProfit(prices) {
//     let minPrice = prices[0];
//     let maxProfit = 0;
//
//     for (let i = 1; i < prices.length; i++) {
//         const profit = prices[i] - minPrice;
//         maxProfit = Math.max(maxProfit, profit);
//         minPrice = Math.min(minPrice, prices[i]);
//     }
//
//     return maxProfit;
// }
//
// console.log(maxProfit(prices));

//Reverse Linked List
// const head = [0,1,2,3];
// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */
//
// class Solution {
//     /**
//      * @param {ListNode} head
//      * @return {ListNode}
//      */
// let prev = null; //we are telling that prev now is null
// let current = head; //we are telling that current now is our head
//
// while (current) { //while we have elements
//     let nextNode = current.next; //nextNode now is pointing to the next item, 1 => 2
//     current.next = prev; //now pointer from 1 => 2 points to null like 1=>null
//     prev = current; //we had our initial element null now it is 1
//     current = nextNode; //now head is 2
// }// every loop we are taking current element, remove the pointer from it to the next value and set this pointer to the previous value, until the end of the list
//
//         return prev;
//     }
// }

//Merge Two Sorted Linked Lists
// const list1 = [1,2,4];
// const list2 = [1,3,5];
// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */
//
// class Solution {
//     /**
//      * @param {ListNode} list1
//      * @param {ListNode} list2
//      * @return {ListNode}
//      */
//     mergeTwoLists(list1, list2) {
//         let dummy = new ListNode(0);
//         let head = dummy;
//
//         while(list1 && list2){
//             if(list1.val <= list2.val){
//                 dummy.next = list1;
//                 list1 = list1.next;
//             } else{
//                 dummy.next = list2;
//                 list2 = list2.next;
//             }
//             dummy = dummy.next;
//         }
//         if(list1 !== null){
//             dummy.next = list1;
//         } else{
//             dummy.next = list2;
//         }
//         return head.next;
//     }
// }

// const nums = [1,2,2,3,4,4,4];
// const res = [...new Set(nums.filter(num=> nums.indexOf(num) !== nums.lastIndexOf(num)))];
// console.log(res);

////////////////
//closure — це коли повернена внутрішня функція «пам’ятає» змінні з того контексту, у якому вона створилася, навіть якщо зовнішня функція вже завершилася.
//closure means that the inner function retains access to the variables (its scope) of the outer function even after the outer function has finished executing.
// function counter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }
// const increment = counter();
// increment();
// increment();

////////////////
//this
// const person = {
//     name: 'Alice',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
//
// const anotherPerson = {
//     name: 'Bob'
// };
//
// person.greet();//Hello, my name is Alice
// person.greet.call(anotherPerson);//Hello, my name is Bob
// const greetFunc = person.greet.bind(person); greetFunc();//Hello, my name is Alice
// const boundGreet = person.greet.bind(anotherPerson) ; boundGreet();//Hello, my name is Bob
////
// const calculator = {
//     number: 5,
//     multiplyBy: function(x) {
//         return function() {
//             console.log(this.number * x);
//         };
//     }
// };
//
//    const double = calculator.multiplyBy(2).bind(calculator);
//    double();
////

// const user = {
//     name: 'Carol',
//     age: 30,
//     getAgeArrow: () => {
//         //Arrow functions don’t get their own this—they inherit it from their surrounding scope. In a module file, that surrounding scope has this === undefined.
//         console.log(this.age);
//     },
//     getAgeRegular() {
//         console.log(this.age);
//     }
// };
//
// const stranger = {
//     name: 'Dave',
//     age: 45
// };
//
// user.getAgeArrow();    // undefined
// user.getAgeRegular();  // 30
//
// const fn = user.getAgeRegular;
// fn();                  // undefined
//
// const newUserAge = user.getAgeRegular.bind(stranger);
// newUserAge(); //45

/////
// function factorial(n) {
//     if ( n === 0 || n === 1) return 1;
//     return  n * factorial(n-1)
// }
//
// console.log(factorial(5));//120

/////
// function reversedStr(s){
//     return s.split('').reverse().join('');
// }
//
// console.log(reversedStr('hi'));//ih