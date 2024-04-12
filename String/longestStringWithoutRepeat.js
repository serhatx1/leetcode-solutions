/**
 * Description:
 * This function calculates the length of the longest substring without repeating characters in a given string 's'.
 * 
 * Algorithm Steps:
 * 1. Initialization:
 *    - Initialize an empty Map named 'hashT' to store characters and their indices.
 *    - Initialize 'max' to 0 to track the length of the longest substring.
 *    - Initialize 'start' to 0 to mark the start index of the current substring.
 * 
 * 2. Iterating through the String:
 *    - Start iterating through the characters of the input string 's'.
 *    - At each iteration:
 *      - Check if the current character is already present in 'hashT' and its index is greater than or equal to 'start'.
 *      - If so, update 'start' to the index of the repeating character plus 1.
 *      - Update the index of the current character in 'hashT'.
 *      - Update 'max' by taking the maximum of the current substring length and the previous maximum.
 * 
 * 3. Return:
 *    - Return 'max', which represents the length of the longest substring without repeating characters.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n), where 'n' is the length of the input string 's'.
 *    The function iterates through the string once.
 * - Space Complexity: O(min(n, m)), where 'n' is the length of the input string 's' and 'm' is the size of the character set.
 *    Additional space is used to store characters and their indices in the Map.
 */

var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) {
        return s.length;
    }

    let hashT = new Map(); // Map to store characters and their indices
    let max = 0; // Length of the longest substring
    let start = 0; // Start index of the current substring

    // Iterate through the characters of the input string
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // Check if the current character is already present in 'hashT' and its index is greater than or equal to 'start'
        if (hashT.has(currentChar) && hashT.get(currentChar) >= start) {
            start = hashT.get(currentChar) + 1; // Update 'start' to the index of the repeating character plus 1
        }

        hashT.set(currentChar, end); // Update the index of the current character in 'hashT'

        // Update 'max' by taking the maximum of the current substring length and the previous maximum
        max = Math.max(max, end - start + 1); 
    }

    // Return 'max', which represents the length of the longest substring without repeating characters
    return max;
};
