/**
 * Simplifies a Unix-style file path by removing unnecessary directory references.
 * @param {string} path - The input path to simplify.
 * @returns {string} - The simplified path.
 */
var simplifyPath = function(path) {
    // Initialize an empty stack to keep track of directory names
    const stack = [];
    
    // Split the input path into an array of directory names
    const dir = path.split('/');
    
    // Iterate over each directory name
    for (const dirName of dir) {
        // Skip empty directory names or "."
        if (dirName === "" || dirName === ".") {
            continue;
        }
        
        // Handle parent directory ("..") by popping from the stack
        if (dirName === "..") {
            stack.pop();
        } else {
            // Push non-empty directory names onto the stack
            stack.push(dirName);
        }
    }
    
    // Construct the simplified path by joining directory names from the stack
    return "/" + stack.join("/");
};

// Example usage:
const path = "/a/b/c/../d/e/";
const simplifiedPath = simplifyPath(path);
console.log(simplifiedPath); // Output: "/a/b/d/e"
