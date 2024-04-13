/**
 * Description:
 * This function checks whether a given string 's' is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * 
 * Algorithm Steps:
 * 1. Preprocessing:
 *    - Convert the input string 's' to lowercase using the 'toLowerCase' method.
 *    - Remove non-alphanumeric characters from the string using a regular expression.
 * 
 * 2. Palindrome Check:
 *    - Check if the processed string 's' is equal to its reverse.
 *    - If they are equal, return true, indicating that 's' is a palindrome.
 *    - Otherwise, return false.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n), where 'n' is the length of the input string 's'.
 *    The function performs operations such as string manipulation and comparison, which take linear time.
 * - Space Complexity: O(n), where 'n' is the length of the input string 's'.
 *    Additional space is used to store the processed string and its reversed version.
 */

var isPalindrome = function(s) {
    // Preprocessing: Convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");

    // Palindrome Check: Compare the processed string with its reverse
    if (s === s.split("").reverse().join("")) {
        return true; // 's' is a palindrome
    } else {
        return false; // 's' is not a palindrome
    }
};
