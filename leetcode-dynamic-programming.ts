//Climbing Stairs
// const n = 5;
//
// //first way
// function climbStairs(n: number): number {
//     if (n <= 1) return n;
//
//     let a = 1;
//     let b = 1;
//
//     for (let i = 2; i <= n; i++) {
//         const next = a + b;
//         a = b;
//         b = next;
//     }
//     return b;
// }
//
// //second way
// // const cache: Record<number, number> = {
// //     0: 1,
// //     1: 1,
// //     2: 2,
// // };
// //
// // function climbStairs(n: number): number {
// //     if (n <= 2) return n;
// //     for (let i = 3; i <= n; i++) {
// //         cache[i] = cache[i - 1] + cache[i - 2];
// //     }
// //     return cache[n];
// // }
// console.log(climbStairs(n));

////////////////////
