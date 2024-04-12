/**
 * Description:
 * This function compares two strings 's' and 't' after applying backspace characters ('#').
 * 
 * Algorithm Steps:
 * 1. Initialization:
 *    - Initialize two pointers 'i' and 'j' to iterate through strings 's' and 't', respectively.
 *    - Initialize empty strings 'str' and 'str2' to store the modified strings after applying backspace characters.
 * 
 * 2. Backspace Handling:
 *    - Iterate through the characters of strings 's' and 't'.
 *    - If the current character is '#', remove the last character from the corresponding modified string.
 *    - Otherwise, append the current character to the modified string.
 * 
 * 3. Comparison:
 *    - Compare the final modified strings 'str' and 'str2'.
 *    - Return true if they are equal, indicating that 's' and 't' are equal after applying backspace characters; otherwise, return false.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n + m), where 'n' is the length of string 's' and 'm' is the length of string 't'.
 * - Space Complexity: O(n + m), where 'n' is the length of string 's' and 'm' is the length of string 't'. Additional space is used to store the modified strings.
 */

var backspaceCompare = function(s, t) {
    let i = 0;
    let j = 0;
    let str = "";
    let str2 = "";

    // Iterate through strings 's' and 't'
    while (i < s.length || j < t.length) {
        // Handle backspace character in string 's'
        if (s[i] == "#") {
            str = str.slice(0, -1); // Remove last character
        } else if (i < s.length) {
            str += s[i]; // Append current character
        }

        // Handle backspace character in string 't'
        if (t[j] == "#") {
            str2 = str2.slice(0, -1); // Remove last character
        } else if (j < t.length) {
            str2 += t[j]; // Append current character
        }

        i++;
        j++;
    }

    // Compare modified strings 'str' and 'str2'
    return str == str2 ? true : false;
};
