/*Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.*/


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let prev = {}
    while(n!==1){
        let total=0
        let digit = n
        while(digit>0){
        total+=Math.pow((digit%10),2)
        digit=Math.floor(digit/10)
        }
        if(prev[total]){
            return false
        }
        prev[total]=true
        n=Math.floor(total)
    }
    return true
};
