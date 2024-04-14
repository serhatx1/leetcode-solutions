/**
 * Removes consecutive asterisks from the end of a string.
 * @param {string} s - The input string.
 * @return {string} - The modified string with consecutive asterisks removed from the end.
 */
var removeStars = function(s) {
    // Initialize an empty stack to store characters
    let stack = [];
    // Initialize a counter to keep track of consecutive asterisks encountered
    let count = 1;
    
    // Iterate through the string starting from the end
    for (let i = s.length - 1; i >= 0; i--) {
        // If the current character is not an asterisk and there are consecutive asterisks to be removed,
        // decrement the count and continue to the next character
        if (s[i] !== "*" && count > 1) {
            count--;
            continue;
        }
        // If the current character is an asterisk, increment the count and continue to the next character
        if (s[i] === "*") {
            count++;
            continue;
        }
        // If the current character is neither an asterisk nor part of consecutive asterisks, push it onto the stack
        stack.push(s[i]);
    }
    
    // Reverse the order of characters in the stack and join them to form the modified string
    return stack.reverse().join("");
};


