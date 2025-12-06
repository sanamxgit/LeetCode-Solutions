// var longestCommonPrefix = function(strs) {
//     if(!strs[0] || strs.length == 1) return strs[0] || "";
//     let i = 0;
    
//     while(strs[0][i] && strs.every(w => w[i] === strs[0][i]))
//         i++;
//     return strs[0].slice(0, i);
// }

// console.log(longestCommonPrefix(["flower","flow","flight"]));

// 3sum
// var threeSum = function(nums) {
//     const res =[];

//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             for(let k = j + 1; k < nums.length; k++) {
//                 if(nums[i] + nums[j] + nums[k] === 0){
//                     const curr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

//                     if (!res.some(triplet => JSON.stringify(triplet) === JSON.stringify(curr))) {
//                         res.push(curr);
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// };

// console.log(threeSum([-1,0,1,2,-1,-4]));

// let minDiff = Number.MAX_VALUE;
// let res = 0;

// var threeSumClosest = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             for(let k = j + 1; k < nums.length; k++) {
//                 let currSum = nums[i] + nums[j] + nums[k];
//                 let currDiff = Math.abs(currSum - target);

//                 if(currDiff < minDiff) {
//                     res = currSum;
//                     minDiff = currDiff;
//                 } else if ( currDiff === minDiff) {
//                     res = Math.max(res, currSum);
//                 }

//             }
//         }
//     }
//     return res;
    
// };

// console.log(threeSumClosest([0,0,0], 1));

//task 26
// var removeDuplicates = function(nums) {
//     const n = nums.length;
//     if(n<=1){
//         return n;
//     }

//     let idx = 1;
//     for(let i = 1; i < n; i++) {
//         if (nums[i] != nums[i - 1]){
//             nums[idx++] = nums[i];
//         }
//     }
//     return idx;
    
// };

// var merge = function(nums1, m, nums2, n) {
//     for(i=0; i < m; i++){
//         nums1[i] += nums2[i]
//     }
//     return nums1;

// };


// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

// valid parentheses
// var isValid = function(s) {
//     let st = [];

//     for (let c of s){
//         if(c === '(' || c === '{' || c == '[') {
//             st.push(c);
//         } else if (c === ')' || c === '}' || c == ']') {
//             if (st.length === 0) return false;
//             let top = st[st.length - 1];
//             if ((c === ')' && top !== '(') ||
//                 (c === '}' && top !== '{') ||
//                 (c === ']' && top !== '[')
//             ) 
//             return false;

//             st.pop();
//         }
//     }
//     return st.length === 0;
//  };
