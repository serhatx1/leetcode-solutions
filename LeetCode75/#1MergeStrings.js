/**
 * Merges two strings alternately.
 * @param {string} word1 - The first input string.
 * @param {string} word2 - The second input string.
 * @returns {string} - The merged string.
 */
var mergeAlternately = function(word1, word2) {
    // Initialize an empty string to store the merged result
    let str = "";

    // Loop while both word1 and word2 are not empty
    while(word1 && word2) {
        // Concatenate the first character of word1 and word2 to the result string
        str = str + word1[0] + word2[0];
        
        // Remove the first character from both word1 and word2
        word1 = word1.slice(1);
        word2 = word2.slice(1);
    }

    // If there are remaining characters in word1, append them to the result string
    if(word1.length > 0) {
        str += word1;
    }
    
    // If there are remaining characters in word2, append them to the result string
    if(word2.length > 0) {
        str += word2;
    }

    // Return the merged string
    return str;
};
