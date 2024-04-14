/**
 * Initialize your data structure here.
 * This constructor function initializes a MinStack object with two arrays:
 * - arr: to store the elements of the stack
 * - min: to keep track of the minimum values encountered so far
 * The min array is initialized with Infinity to handle the case of an empty stack.
 */
var MinStack = function() {
    this.arr = [];
    this.min = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 * The push method adds a new value to the stack.
 * It also updates the min stack by pushing the minimum value encountered so far onto it.
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
    this.min.push(Math.min(val, this.min[this.min.length - 1]));
};

/**
 * @return {void}
 * The pop method removes the top element from both the arr and min stacks.
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    this.min.pop();
};

/**
 * @return {number}
 * The top method returns the top element of the stack without removing it.
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 * The getMin method returns the current minimum value stored in the min stack.
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

