// Define the MyQueue class
var MyQueue = function () {
    // Initialize two arrays to represent the queue
    this.arr = [];   // Primary array for enqueue and dequeue operations
    this.arr2 = [];  // Secondary array used for auxiliary operations
};

/** 
 * @param {number} x - The element to be added to the back of the queue
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    // Add the element to the back of the queue (enqueue operation)
    this.arr.push(x);
};

/**
 * @return {number} - The front element of the queue after removing it (dequeue operation)
 */
MyQueue.prototype.pop = function () {
    // If there is only one element in the primary array, remove and return it
    if (this.arr.length == 1) {
        return this.arr.pop();
    }

    // If there are multiple elements, move them from the primary array to the secondary array
    while (this.arr.length !== 0) {
        this.arr2.push(this.arr.pop());
    }

    // Pop the front element from the secondary array (which now contains elements in reversed order)
    let number = this.arr2.pop();

    // Reverse the elements in the secondary array and assign it back to the primary array
    this.arr = this.arr2.reverse();

    // Clear the secondary array for future use
    this.arr2 = [];

    // Return the dequeued element
    return number;
};

/**
 * @return {number} - The front element of the queue without removing it
 */
MyQueue.prototype.peek = function () {
    // Similar to pop(), but instead of popping the element, just return it
    if (this.arr.length == 1) {
        return this.arr[0];
    }

    while (this.arr.length !== 0) {
        this.arr2.push(this.arr.pop());
    }

    let number = this.arr2[this.arr2.length - 1];

    this.arr = this.arr2.reverse();
    this.arr2 = [];

    return number;
};

/**
 * @return {boolean} - True if the queue is empty, false otherwise
 */
MyQueue.prototype.empty = function () {
    // Check if the primary array is empty
    if (this.arr.length == 0) {
        return true;
    }
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
