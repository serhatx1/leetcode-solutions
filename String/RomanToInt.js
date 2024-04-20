/**
 * Converts a Roman numeral string to its corresponding integer value.
 * @param {string} s - The Roman numeral string to convert.
 * @return {number} - The integer value of the Roman numeral.
 */
var romanToInt = function(s) {
    // Define a hash table to map Roman numeral characters to their integer values
    const hashT = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    };

    // Initialize a variable to store the cumulative integer value
    let total = 0;

    // Iterate through the characters of the input string
    for(let i = 0; i < s.length; i++){
        // Check if the current character forms a subtractive pair with the next character
        if(hashT[s[i]] < hashT[s[i+1]]){
            // If so, subtract the value of the current character from the value of the next character
            // and add it to the total. Increment the loop index to skip the next character.
            total += (hashT[s[i+1]] - hashT[s[i]]);
            i++;
        } else {
            // If no subtractive pair, add the value of the current character to the total.
            total += hashT[s[i]];
        }
    }

    // Return the total integer value of the Roman numeral
    return total;
};
