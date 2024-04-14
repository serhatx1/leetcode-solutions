/**
 * Description:
 * This function merges k sorted linked lists into a single sorted linked list.
 * It iteratively selects the minimum node from the heads of all lists and appends
 * it to the merged list until all lists are exhausted.
 * 
 * Algorithm Steps:
 * 1. Initial Check:
 *    - Check if the input array 'lists' is empty or contains only one list. 
 *      If so, return the single list or null accordingly.
 * 
 * 2. Merge Process:
 *    - Create a dummy node 'dummy' to serve as the head of the merged list.
 *    - Initialize a pointer 'curr' to point to the dummy node.
 *    - Enter an infinite loop to repeatedly find and append the minimum node.
 * 
 * 3. Finding the Minimum Node:
 *    - Initialize variables 'min' and 'enteredIndex'.
 *    - Iterate through all lists, updating 'min' and 'enteredIndex' accordingly.
 * 
 * 4. Appending the Minimum Node:
 *    - If 'enteredIndex' remains -1 after the loop, all lists are exhausted, and 
 *      the merging process is complete. Return the merged list.
 *    - Otherwise, append the minimum node at 'enteredIndex' to the merged list.
 * 
 * 5. Loop Termination:
 *    - Continue the merge process until all lists are exhausted.
 * 
 * 6. Return:
 *    - Return the next node after the dummy node, representing the head of the merged list.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(N * k), where N is the total number of nodes in all lists 
 *                    and k is the number of lists.
 *    The function iterates through all nodes in the lists multiple times.
 * - Space Complexity: O(1).
 *    The function uses only constant extra space for pointers and variables.
 */

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    let dummy = new ListNode(0);
    let curr = dummy;

    while (true) {
        let min = Infinity;
        let enteredIndex = -1;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null) continue;
            if (lists[i].val < min) {
                min = lists[i].val;
                enteredIndex = i;
            }
        }

        if (enteredIndex === -1) return dummy.next;

        curr.next = new ListNode(min);
        curr = curr.next;
        lists[enteredIndex] = lists[enteredIndex].next;
    }

    return dummy.next;
};
