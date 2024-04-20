public class Solution {
    public int MaxProduct(int[] nums) {
        // Request aggressive garbage collection to optimize memory usage
        GC.Collect(2, GCCollectionMode.Aggressive);

        // Initialize variables to store minimum, maximum, and result values
        int min = nums[0];
        int max = nums[0];
        int result = nums[0];
        
        // Iterate through the nums array starting from the second element
        for(int i = 1; i < nums.Length; i++) {
            // Update the minimum and maximum values considering three possibilities:
            // 1. Previous min * current number
            // 2. Current number (if the previous subarray was negative)
            // 3. Previous max * current number
            int newMin = Math.Min(min * nums[i], Math.Min(nums[i], max * nums[i]));
            int newMax = Math.Max(min * nums[i], Math.Max(nums[i], max * nums[i]));
            
            // Update the min and max values
            min = newMin;
            max = newMax;
            
            // Update the result with the maximum value encountered so far
            result = Math.Max(result, max);
        }
        
        // Return the maximum product found
        return result;
    }
}
