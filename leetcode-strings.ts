//Reverse String
// const s = ["h", "e", "l", "l", "o"];
// function reverseString(s: string[]): void {
//     s.reverse();
// }
// reverseString(s)
// console.log(s)

/////////////////
//Reverse Integer
// const x = -120;
// function reverse(x: number): number {
//     const MAX =  2 ** 31;
//     const MIN = -(2 ** 31);
//     const sign = Math.sign(x);
//     const rev = Number(
//         Math.abs(x).toString()
//             .split('')
//             .reverse()
//             .join('')
//     ) * sign;
//     return rev < MIN || rev > MAX ? 0 : rev;
// }
//
// console.log(reverse(x));//-21

/////////////////
//First Unique Character in a String
// const s = "loveleetcode";
// function firstUniqChar(s: string): number {
//     const count: Record<string, number> = {};
//     for (const ch of s) count[ch] = (count[ch] || 0) + 1;
//     return [...s].findIndex(ch => count[ch] === 1);
// }
// console.log(firstUniqChar(s));

/////////////////
//Valid Anagram
// const s = "anagram";
// const t = "nagaram";
// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) return false;
//     const count: Record<string, number> = {};
//     for (const char of s){
//         count[char] = (count[char]||0) + 1;
//     }
//     for (const char of t){
//         count[char] = (count[char]||0) - 1;
//         if (count[char] < 0) return false;
//     }
//     return true;
// }
// console.log(isAnagram(s, t));

/////////////////
//Valid Palindrome
// const s = "race a car";
// function isPalindrome(s: string): boolean {
//     const cleanStr = s.toLowerCase().replace(/[\W_]+/g, '');
//     return cleanStr === [...cleanStr].reverse().join('');
// }
// console.log(isPalindrome(s))

/////////////////
//String to Integer (atoi)
// const s = "1337c0d3";
//
// function myAtoi(s: string): number {
//     const INT_MAX = 2 ** 31 - 1;
//     const INT_MIN = -(2 ** 31);
//
//     let idx = 0;
//     let sign = 1;
//     let res = 0;
//     const n = s.length;
//
//     while (idx < n && s[idx] === ' ') idx++;
//
//     if (idx < n && (s[idx] === '+' || s[idx] === '-')) {
//         sign = s[idx] === '-' ? -1 : 1;
//         idx++;
//     }
//
//     while (idx < n) {
//         const ch = s[idx];
//         if (ch < '0' || ch > '9') break;
//         const digit = ch.charCodeAt(0) - '0'.charCodeAt(0);
//
//         if (
//             res > Math.trunc(INT_MAX / 10) ||
//             (res === Math.trunc(INT_MAX / 10) && digit > INT_MAX % 10)
//         ) {
//             return sign === 1 ? INT_MAX : INT_MIN;
//         }
//         res = res * 10 + digit;
//         idx++;
//     }
//     return res * sign;
// }
// console.log(myAtoi(s)); // 1337

/////////////////
//Implement strStr()
// const haystack = "sadbutsad";
// const needle = "sad";
//
// function strStr(haystack: string, needle: string): number {
//     return haystack.indexOf(needle);
// }
// console.log(strStr(haystack, needle));//0

/////////////////
//Longest Common Prefix
// const strs = ["flower", "flow", "flight"];
//
// function longestCommonPrefix(strs: string[]): string {
//     if (strs.length === 0) return "";
//     //first approach
//     // const first = strs[0];
//     // for (let i = 0; i < first.length; i++) {
//     //     const char = first[i];
//     //     for (let j = 1; j < strs.length; j++) {
//     //         if (i === strs[j].length || strs[j][i] !== char) {
//     //             return first.slice(0, i);
//     //         }
//     //     }
//     // }
//     // return first;
//
//     //second approach
//     let prefix = "";
//     for (const char of strs[0]) {
//         if (strs.every(s => s[prefix.length] === char)) {
//             prefix += char;
//         } else {
//             break;
//         }
//     }
//     return prefix;
// }
//
// console.log(longestCommonPrefix(strs));//fl