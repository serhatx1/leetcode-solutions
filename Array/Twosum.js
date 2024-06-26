

/*
Question
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
End of the question

Description:
The given JavaScript code is a solution to the problem of finding two numbers in an array that add up to a given target.

Algorithm Steps:

1. Initialization:
   - Initialize an empty object `hashT`. This object will serve as a hash table to store the indices of elements encountered so far.

2. Iterating through the Array:
   - Loop through each element of the `nums` array using a for loop.

3. Checking Conditions:
   - Within the loop, for each element `nums[i]`, check if its complement (`target - nums[i]`) exists in the hash table `hashT`.
     - If the complement exists and the element is not the same as the complement (to avoid using the same element twice), return the indices of the two numbers that add up to the target.
     - If the current element is equal to half the target value, and its duplicate exists in the hash table, return the indices of these two elements.

4. Storing in Hash Table:
   - If the conditions are not met, store the current element `nums[i]` along with its index `i` in the hash table `hashT`.

5. Return Empty Array if No Solution:
   - If no solution is found after iterating through the entire array, return an empty array `[]`.

Explanation:
- The algorithm utilizes a hash table to efficiently find the complement of each element required to reach the target sum.
- It checks for two cases: 
  1. When the current element's complement exists in the hash table, indicating a valid pair.
  2. When the current element is half the target value and its duplicate exists in the hash table.
- If either condition is met, the algorithm returns the indices of the two numbers that add up to the target.
- If no solution is found, it returns an empty array.

Time Complexity:
This algorithm has a time complexity of O(n), where n is the number of elements in the input array `nums`, as it only requires a single pass through the array to find the solution.
*/


var twoSum = function(nums, target) {
    let hashT={}
    for(let i =0;i<nums.length;i++){
        if(hashT[nums[i]]!==undefined &&nums[i]*2==target){
            return [hashT[nums[i]],i]
        }
        else if(hashT[target-nums[i]]!==undefined){
            return [hashT[target-nums[i]],i]
        }
        else{
            hashT[nums[i]]=i
        }
    }
    return []
};
