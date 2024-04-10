/*
Description:
This JavaScript function aims to find the maximum area of water that can be trapped between vertical lines represented by an array `height`.

Algorithm Steps:
1. Initialization:
   - `endPoint` is initialized to the index of the last element in the `height` array (`height.length - 1`).
   - `max` is initialized to 0 to track the maximum area.

2. Main Loop:
   - The function iterates through the array of heights using a for loop.
   - For each iteration:
     - It calculates the area of the container formed by the current line at index `i` and the line at `endPoint` using the formula: `(endPoint - i) * min(height[i], height[endPoint])`.
     - The minimum height between the two lines is taken to ensure that the container doesn't slant, as per the problem's requirement.
     - The calculated area (`k`) is compared with the current maximum area (`max`), and the greater value is assigned to `max`.

3. Pointer Adjustment:
   - After calculating the area, the function checks if the height of the line at index `i` is greater than the height of the line at `endPoint`.
   - If it is, it means that the container's height would be limited by the line at index `endPoint`. So, it decrements `endPoint` by 1 and decrements `i` by 1 to reevaluate the area with the updated `endPoint`.
   - This step optimizes the search for larger areas by moving the `endPoint` to a potentially taller line.

4. Return:
   - After completing the loop, the function returns the maximum area (`max`).

Complexity Analysis:
- Time Complexity: O(n), where n is the length of the `height` array.
- Space Complexity: O(1), as the solution uses only a constant amount of extra space.
*/

var maxArea = function(height) {
    let endPoint = height.length-1; // Initialize endPoint to the index of the last element
    let max = 0; // Initialize max area to 0

    // Iterate through the array of heights
    for(let i = 0; i < height.length; i++) {
        // Calculate the area of the container
        let k = (endPoint - i) * Math.min(height[i], height[endPoint]);
        // Update max area if current area is greater
        max = Math.max(max, k);
        
        // Adjust pointers based on heights
        if (height[i] > height[endPoint]) {
            endPoint--; // Move endPoint if height at i is greater
            i--; // Decrement i to reevaluate area with updated endPoint
        }
    }
    return max; // Return the maximum area
};
