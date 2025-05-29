//Remove Duplicates from Sorted Array

// let nums = [1,1,2];
// const expectedNums = [1,2];
// function removeDuplicates(nums: number[]): number {
// const newNums = [...new Set(nums)];
//   nums.unshift(...newNums)
// return newNums.length
// }
// const k = removeDuplicates(nums);
// console.log(k, nums);

////////////////
//Best Time to Buy and Sell Stock II
// const prices = [7,1,5,3,6,4];
// function maxProfit(prices: number[]): number {
//     return prices.reduce((max, price, i) => {
//         const prev = prices[i -1];
//         return price > prev ? max + (price - prev) : max;
//     }, 0);
// }
// console.log(maxProfit(prices))//7

////////////////
//Rotate Array
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
//
// function reverse(nums: number[], start: number, end: number): void {
//     while (start < end) {
//         const temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
// }
//
// function rotate(nums: number[], k: number): void {
//     k = k % nums.length;
//
//     //first approach
//     // const last = nums.slice(-k);
//     // const first = nums.slice(0, -k);
//     // nums.splice(0, nums.length, ...last, ...first);
//
//     //second approach
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
// }
// rotate(nums, k)
// console.log(nums)

////////////////
//Contains Duplicate
// const nums = [1,2,3,1];
// function containsDuplicate(nums: number[]): boolean {
// return [...new Set(nums)].length !== nums.length;
// }
// console.log(containsDuplicate(nums));

////////////////
//Single Number
// const nums = [4,1,2,1,2];
// function singleNumber(nums: number[]): number|undefined {
//     return nums.find(num=>nums.indexOf(num) === nums.lastIndexOf(num))
// }
// console.log(singleNumber(nums));//4

////////////////
// Intersection of Two Arrays II
// const nums1 = [1, 2, 2, 1, 1];
// const nums2 = [2, 2, 1];
//
// function intersect(nums1: number[], nums2: number[]): number[] {
//     if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
//
//     const counts: Record<number, number> = {};
//     for (const x of nums1) {
//         counts[x] = (counts[x] || 0) + 1;
//     }
//
//     const result: number[] = [];
//     for (const x of nums2) {
//         if (counts[x] > 0) {
//             result.push(x);
//             counts[x]--;
//         }
//     }
//
//     return result;
// }
// console.log(intersect(nums1, nums2));

////////////////
//Plus One
// const digits = [1,9,8];
// function plusOne(digits: number[]): number[] {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         digits[i]++;
//         if (digits[i] < 10) return digits;
//         digits[i] = 0;
//     }
//     digits.unshift(1);
//     return digits;
// }
//
// console.log(plusOne(digits));

////////////////
//Move Zeroes
// const nums = [0, 1, 0, 3, 12];
// function moveZeroes(nums: number[]): void {
//     let notZeroCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[notZeroCount++] = nums[i];
//         }
//     }
//     nums.fill(0, notZeroCount);
// }
// moveZeroes(nums);
// console.log(nums)//[ 1, 3, 12, 0, 0 ]

////////////////
//Two Sum
// const nums = [3, 2, 4];
// const target = 6;
//
// function twoSum(nums: number[], target: number): number[] {
//     //first solution O(n2)
//     // for (let i = 0; i < nums.length; i++) {
//     //     for (let j = i + 1; j < nums.length; j++) {
//     //         if (nums[i] + nums[j] === target) {
//     //             return [i, j];
//     //         }
//     //     }
//     // }
//     // return [];
//
//     //second solution O(n)
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const difference = target - nums[i];
//         if (map.has(difference)) {
//             return [map.get(difference), i];
//         }
//         map.set(nums[i], i)
//     }
//     return [];
// }
// console.log(twoSum(nums, target))

////////////////
//Valid Sudoku
// const board =
//         [["8","3",".",".","7",".",".",".","."]
//         ,["6",".",".","1","9","5",".",".","."]
//         ,[".","9","8",".",".",".",".","6","."]
//         ,["8",".",".",".","6",".",".",".","3"]
//         ,["4",".",".","8",".","3",".",".","1"]
//         ,["7",".",".",".","2",".",".",".","6"]
//         ,[".","6",".",".",".",".","2","8","."]
//         ,[".",".",".","4","1","9",".",".","5"]
//         ,[".",".",".",".","8",".",".","7","9"]]
//
// function isValidSudoku(board: string[][]): boolean {
//     const seen = new Set();
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const d = board[i][j];
//             if (board[i][j] !== '.') {
//                 const rowKey = `${d} in row ${i}`;
//                 const colKey = `${d} in col ${j}`;
//                 const boxKey = `${d} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
//                 if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
//                     return false;
//                 }
//                 seen.add(rowKey);
//                 seen.add(colKey);
//                 seen.add(boxKey);
//             }
//         }
//     }
//     return true;
// }
// console.log(isValidSudoku(board));//false

////////////////
//Rotate Image by 90 deg
// const matrix =
//     [[1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]];
//
// function rotate(matrix: number[][]): void {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (i<j){
//                 let temp = matrix[i][j]
//                 matrix[i][j] = matrix[j][i]
//                 matrix[j][i] = temp
//             }
//         }
//         matrix[i].reverse();
//     }
// }
//
// rotate(matrix);
// console.log(matrix);