// Define a constructor function for MyStack
var MyStack = function() {
    // Initialize two arrays to store elements of the stack
    this.arr = [];
    this.arr2 = [];
};

// Pushes an element onto the stack
MyStack.prototype.push = function(x) {
    // Push the element onto the first array
    this.arr.push(x);
};

// Removes and returns the element at the top of the stack
MyStack.prototype.pop = function() {
    // If there's only one element in arr, remove and return it
    if (this.arr.length === 1) {
        return this.arr.shift();
    }
    // Move all elements except the last one from arr to arr2
    while (this.arr.length > 1) {
        this.arr2.push(this.arr.shift());
    }
    // Get and remove the last element from arr
    let number = this.arr.shift();
    // Swap arr and arr2
    let temp = this.arr;
    this.arr = this.arr2;
    this.arr2 = temp;
    // Return the removed element
    return number;
};

// Returns the element at the top of the stack without removing it
MyStack.prototype.top = function() {
    // Return the last element of arr
    return this.arr[this.arr.length - 1];
};

// Checks if the stack is empty
MyStack.prototype.empty = function() {
    // Check if arr has no elements
    return this.arr.length === 0;
};

// Example usage:
// var obj = new MyStack();
// obj.push(x);
// var param_2 = obj.pop();
// var param_3 = obj.top();
// var param_4 = obj.empty();
