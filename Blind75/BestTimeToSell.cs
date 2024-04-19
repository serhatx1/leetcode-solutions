public class Solution {
    public int MaxProfit(int[] prices) {
        // Initialize variables to keep track of the maximum profit and the minimum price
        int max = 0;
        int pointer = prices[0]; // Set the initial price to the first element of the array
        
        // Loop through the prices array starting from the second element
        for (int i = 1; i < prices.Length; i++) {
            // If the current price is less than the pointer (minimum price seen so far),
            // update the pointer to the current price
            if (pointer > prices[i]) {
                pointer = prices[i];
            }
            // If the current price minus the pointer (minimum price) is greater than the
            // current maximum profit, update the maximum profit
            else {
                max = (prices[i] - pointer) > max ? prices[i] - pointer : max;
            }
        }
        
        // Return the maximum profit
        return max;
    }
}
