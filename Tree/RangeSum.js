/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    // Initialize a variable to store the total sum
    let total = 0;
    
    // Define a recursive function to traverse the tree
    function tree(node) {
        // Base case: if the node is null, return
        if (node === null) return;
        
        // Recursively call the function on the left and right subtrees
        tree(node.left);
        tree(node.right);
        
        // Get the value of the current node
        const k = node.val;
        
        // If the node value is within the specified range, add it to the total
        if (k >= low && k <= high) {
            total += k;
        }
    }
    
    // Start the recursive traversal from the root node
    tree(root);
    
    // Return the total sum
    return total;
};
