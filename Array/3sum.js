/**
 * Description:
 * This function finds all unique triplets in the array 'nums' such that the sum of the triplet equals zero.
 * 
 * Algorithm Steps:
 * 1. Sorting:
 *    - Sort the input array 'nums' in ascending order.
 * 
 * 2. Main Loop:
 *    - Iterate through the sorted array 'nums' using a for loop.
 *    - For each unique number 'nums[i]' in the array:
 *      - Skip duplicate numbers to avoid duplicate triplets.
 *      - Initialize two pointers, 'left' and 'right', to find the other two numbers in the triplet.
 *      - Use the two-pointer technique to search for the other two numbers that sum up to the negative of 'nums[i]'.
 *      - If a triplet is found (sum of three numbers equals zero), add it to the result array 'arr'.
 *      - Skip duplicate numbers to avoid duplicate triplets.
 * 
 * 3. Return:
 *    - Return the array 'arr' containing all unique triplets found.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n^2), where 'n' is the length of the input array 'nums'. Sorting takes O(n log n), and the two-pointer technique within the main loop takes O(n).
 * - Space Complexity: O(1) (not counting the space required for the output array).
 */

var threeSum = function(nums) {
    // Sort the input array in ascending order
    nums = nums.sort(function(a, b) { return a - b });

    // Initialize an empty array to store the unique triplets
    let arr = [];

    // Iterate through the sorted array
    for (let i = 0; i < nums.length; i++) {
        // Skip duplicates to avoid duplicate triplets
        if (nums[i] == nums[i - 1] && i > 0) {
            continue;
        }

        // Initialize two pointers: 'left' and 'right'
        let left = i + 1;
        let right = nums.length - 1;

        // Move the pointers towards each other until they meet
        while (left < right) {
            // Calculate the sum of the current triplet
            let sum = nums[left] + nums[right] + nums[i];

            // Adjust pointers based on the sum
            if (sum > 0) {
                right--; // Move 'right' pointer leftward
            } else if (sum < 0) {
                left++; // Move 'left' pointer rightward
            } else {
                // If sum equals zero, a triplet is found
                arr.push([nums[i], nums[left], nums[right]]);
                left++; // Move 'left' pointer rightward

                // Skip duplicates of the second number to avoid duplicate triplets
                while (nums[left] == nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    // Return the array of unique triplets
    return arr;
};
