//Merge Sorted Array
// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     const newArr = [...nums1.slice(0,m), ...nums2].sort((a, b) => a - b)
//     nums1.splice(0, nums1.length, ...newArr)
// }
// merge(nums1, m, nums2, n)//[ 1, 2, 2, 3, 5, 6 ]

/////////////////
//First Bad Version
// const n = 10;
// const bad = 3;
// var solution = function (isBadVersion: any) {
//     return function (n: number): number {
//         let low = 1;
//         let high = n;
//         while (low < high) {
//             const mid = Math.floor((low + high) / 2);
//             if (isBadVersion(mid)) {
//                 high = mid;
//             } else {
//                 low = mid + 1;
//             }
//         }
//         return low
//     };
// };
//
// const isBadVersion = (version: number) => version >= bad;
// const findFirstBad = solution(isBadVersion);
// console.log(findFirstBad(n));