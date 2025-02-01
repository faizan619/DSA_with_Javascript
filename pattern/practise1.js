// let arr1 = [2,-3,6,1,2,2,0];
// let first = 0;
// let last = 4;
// let prevSum = 0;


// Brute Force Approach
// while(arr1.length>last){
//     let sum = 0;
//     for(let i =first;i<last;i++){
//         console.log("Data : ",arr1[i]);
//         sum+=arr1[i];
//     }
//     if(prevSum <=sum){
//         prevSum = sum;
//     }
//     else{
//         sum = prevSum;
//     }
//     console.log("Pre : ",prevSum);
//     first++;
//     last++;
//     console.log("Highest : ",sum);
//     console.log("============================");
// }

let arr1 = [2, -3, 6, 1, 2, 2, 0];
let k = 4; // Window size
let maxSum = 0;
let currentSum = 0;

// Compute sum of first window
for (let i = 0; i < k; i++) {
    currentSum += arr1[i];
}
maxSum = currentSum;

// Sliding window technique
for (let i = k; i < arr1.length; i++) { 
    console.log(arr1[i - k])
    currentSum += arr1[i] - arr1[i - k]; // Slide window
    maxSum = Math.max(maxSum, currentSum);
}

console.log("Maximum sum of subarray of size", k, "is:", maxSum);
