An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

 
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let total = 0;
    let temp = x;
    while(x>=1){
        total+=parseInt(x%10)
        x=parseInt(x/10)
    }
    x=null;
    return temp%total==0?total:-1
};
