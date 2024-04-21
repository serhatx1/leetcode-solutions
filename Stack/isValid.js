/**
 * @param {string} s - The input string containing parentheses, square brackets, and curly braces.
 * @return {boolean} - Returns true if the input string contains valid parentheses, square brackets, and curly braces, and false otherwise.
 */
var isValid = function(s) {
    // Initialize variables to track if each type of opening parenthesis is encountered
    let isOpen = false;
    let isOpen1 = false;
    let isOpen2 = false;
    
    // Define a hash map to store the corresponding opening parenthesis for each closing parenthesis
    const hashM = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    
    // Initialize an empty stack to store opening parentheses
    const stack = [];
    
    // Check if the length of the input string is odd, return false if it is
    if (s.length % 2 === 1) {
        return false;
    }
    
    // Iterate through each character in the input string
    for (let i = 0; i < s.length; i++) {
        // If the current character is a closing parenthesis
        if (typeof hashM[s[i]] !== "undefined") {
            // If the stack is not empty and the top of the stack contains the corresponding opening parenthesis
            if (stack[stack.length - 1] === hashM[s[i]]) {
                // Pop the opening parenthesis from the stack
                stack.pop();
            } else {
                // If the stack is empty or the top of the stack does not contain the corresponding opening parenthesis, return false
                return false;
            }
        } else {
            // If the current character is an opening parenthesis, push it onto the stack
            stack.push(s[i]);
        }
    }
    
    // If the stack is empty, return true (all opening parentheses have corresponding closing parentheses)
    if (stack.length === 0) {
        return true;
    }
    
    // If the stack is not empty, return false (some opening parentheses do not have corresponding closing parentheses)
    return false;
};
