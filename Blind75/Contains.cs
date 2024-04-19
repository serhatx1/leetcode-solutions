# Contains Duplicate C# Solution

## Introduction
The provided C# solution aims to determine whether an array of integers contains any duplicate elements. It utilizes sorting and recursion to efficiently check for duplicates.

## Solution Overview
The solution consists of two methods:
1. `ContainsDuplicate(nums: int[]): bool`
2. `Check(arr: int[], i: int = 0): bool`

## Explanation of `ContainsDuplicate` Method
- This method is the entry point of the solution.
- **Input:** An array of integers `nums`.
- **Output:** Returns a boolean value indicating whether `nums` contains any duplicate elements.
- **Steps:**
  1. Sort the `nums` array using `Array.Sort(nums)`.
  2. Check if the length of the sorted `nums` array is less than 2. If so, return `false` since an array with less than 2 elements cannot have duplicates.
  3. Otherwise, call the `Check` method to perform the actual check for duplicates and return its result.

## Explanation of `Check` Method
- This method is a helper method used by `ContainsDuplicate` to recursively check for duplicate elements.
- **Input:** An array of integers `arr` and an optional integer `i` representing the current index (defaults to 0).
- **Output:** Returns a boolean value indicating whether `arr` contains any duplicate elements.
- **Steps:**
  1. Check if `i` is greater than or equal to `arr.Length - 1`. If so, return `false` since the end of the array has been reached without finding any duplicates.
  2. If `arr[i]` is equal to `arr[i + 1]`, return `true`, indicating that adjacent elements are duplicates.
  3. If neither of the above conditions is met, recursively call the `Check` method with `i + 1` to check the next pair of elements.
  4. The recursion continues until either a duplicate pair is found, or the end of the array is reached without finding any duplicates.

## Code
```csharp
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Array.Sort(nums);
        if(nums.Length < 2) {
            return false;
        }
        return Check(nums);
    }

    public bool Check(int[] arr, int i = 0) {
        if(i >= arr.Length - 1) {
            return false;
        }
        if(arr[i] == arr[i + 1]) {
            return true;
        }
        return Check(arr, i + 1);
    }
}
