/**
 * Determines whether each kid can have the greatest number of candies by adding extra candies.
 * @param {number[]} candies - An array representing the number of candies each kid has.
 * @param {number} extraCandies - The number of extra candies that can be added.
 * @returns {boolean[]} - An array indicating whether each kid can have the greatest number of candies.
 */
var kidsWithCandies = function(candies, extraCandies) {
    // Find the maximum number of candies among all kids.
    let max = Math.max(...candies);
    
    // Create an empty array to store the result.
    let result = [];
    
    // Iterate through the candies array.
    for (let i = 0; i < candies.length; i++) {
        // Check if adding extra candies to the current kid's candies will make them have the most candies.
        if (candies[i] + extraCandies >= max) {
            // If yes, push true to the result array.
            result.push(true);
        } else {
            // If no, push false to the result array.
            result.push(false);
        }
    }
    
    // Return the result array.
    return result;
};
