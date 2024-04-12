/**
 * Description:
 * This function calculates the total amount of water that can be trapped between vertical lines represented by an array 'height'.
 * 
 * Algorithm Steps:
 * 1. Initialization:
 *    - Initialize 'left' to the height of the first element in the 'height' array.
 *    - Initialize 'right' to the height of the last element in the 'height' array.
 *    - Initialize empty arrays 'rightArr' and 'leftArr' to store the maximum heights to the right and left of each element, respectively.
 *    - Initialize 'total' to 0 to track the total trapped water.
 *    - Initialize 'endPoint' to the second-to-last index of the 'height' array.
 * 
 * 2. Left and Right Maximum Heights Calculation:
 *    - Iterate through the 'height' array from left to right.
 *    - Update 'left' to the maximum height encountered so far.
 *    - Iterate through the 'height' array from right to left.
 *    - Update 'right' to the maximum height encountered so far.
 *    - Store the maximum heights in the 'rightArr' and 'leftArr' arrays.
 * 
 * 3. Water Trapping Calculation:
 *    - Iterate through the 'height' array.
 *    - Calculate the water trapped above each element by taking the minimum of the maximum heights to the left and right minus the height of the current element.
 *    - Add the calculated amount of trapped water to the 'total'.
 * 
 * 4. Return:
 *    - Return the total amount of water trapped.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n), where 'n' is the length of the 'height' array. The function iterates through the array twice.
 * - Space Complexity: O(n), where 'n' is the length of the 'height' array. Additional space is used to store the maximum heights to the left and right of each element.
 */

var trap = function(height) {
    // Initialize 'left' to the height of the first element
    let left = height[0];
    // Initialize 'right' to the height of the last element
    let right = height[height.length - 1];
    // Initialize arrays to store maximum heights to the right and left of each element
    let rightArr = [];
    let leftArr = [];
    // Initialize 'total' to track total trapped water
    let total = 0;
    // Initialize 'endPoint' to the second-to-last index
    let endPoint = height.length - 2;

    // Calculate maximum heights to the left of each element
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > left) {
            left = height[i - 1];
        }
        leftArr.push(left);
    }

    // Calculate maximum heights to the right of each element
    for (let i = endPoint; i >= 0; i--) {
        if (height[i + 1] > right) {
            right = height[i + 1];
        }
        rightArr.push(right);
    }
    rightArr.reverse();

    // Calculate trapped water above each element
    for (let i = 0; i < height.length; i++) {
        let addition = Math.min(leftArr[i], rightArr[i]) - height[i];
        if (addition > 0) {
            total += addition;
        }
    }

    // Return the total amount of trapped water
    return total;
};
