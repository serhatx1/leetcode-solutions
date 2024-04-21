/**
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @return {boolean} - Returns true if the two input strings are anagrams of each other, and false otherwise.
 */
var isAnagram = function(s, t) {
    // Create two hash tables to store character frequencies for strings s and t
    let hashS = {};
    let hashT = {};
    
    // Check if the lengths of the input strings are different; if so, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }
    
    // Populate hash table for string s with character frequencies
    for (let i = 0; i < s.length; i++) {
        if (typeof hashS[s[i]] !== "undefined") {
            hashS[s[i]] += 1;
        } else {
            hashS[s[i]] = 1;
        }
    }
    
    // Populate hash table for string t with character frequencies
    for (let i = 0; i < t.length; i++) {
        if (typeof hashT[t[i]] !== "undefined") {
            hashT[t[i]] += 1;
        } else {
            hashT[t[i]] = 1;
        }
    }
    
    // Check if the two hash tables are equal (i.e., contain the same characters with the same frequencies)
    for (let char in hashS) {
        // If a character frequency in hashS does not match the corresponding frequency in hashT, return false
        if (hashS[char] !== hashT[char]) {
            return false;
        }
    }
    
    // If all characters in hashS have matching frequencies in hashT, return true (the strings are anagrams)
    return true;
};
