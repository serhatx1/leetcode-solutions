/**
 * @param {number[]} nums - An array of integers.
 * @return {boolean} - Returns true if the array contains any duplicate elements, and false otherwise.
 */
var containsDuplicate = function(nums) {
    // Create a hash table to store the frequency of each number in the array
    let hashTable = {};
    
    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current number already exists in the hash table, return true (duplicate found)
        if (hashTable[nums[i]] !== undefined) {
            return true;
        } else {
            // If the current number does not exist in the hash table, add it with a frequency of 1
            hashTable[nums[i]] = 1;
        }
    }
    
    // If no duplicates are found after iterating through the entire array, return false
    return false;
};
