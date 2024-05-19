/**
 * Returns the greatest common divisor of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The greatest common divisor of a and b.
 */
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

/**
 * Finds the greatest common divisor of the concatenated strings str1 and str2, 
 * and returns a substring of str1 with length equal to the gcd.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} - The substring of str1 with length equal to the gcd
 */
var gcdOfStrings = function(str1, str2) {
    // If str1 + str2 is not equal to str2 + str1, there is no common divisor.
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Find the length of the shortest string.
    const length = Math.min(str1.length, str2.length);
    
    // Find the greatest common divisor of the lengths of str1 and str2.
    const k = gcd(str1.length, str2.length);
    
    // Return a substring of str1 with length equal to the gcd.
    return str1.slice(0, k);
};
