// ProductExceptSelf.cs

using System;

public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        // Force garbage collection to release memory aggressively (optional)
        GC.Collect(2, GCCollectionMode.Aggressive);

        // Get the length of the input array
        int n = nums.Length;

        // Initialize an array to store the result
        int[] result = new int[n];
        
        // Calculate the product of elements to the left of each element
        int leftProduct = 1;
        for (int i = 0; i < n; i++) {
            result[i] = leftProduct;
            leftProduct *= nums[i];
        }
        
        // Calculate the product of elements to the right of each element and multiply it with the left product
        int rightProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        
        // Return the final result
        return result;
    }
}
