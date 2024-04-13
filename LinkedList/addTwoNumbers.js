/**
 * Description:
 * This function takes two singly-linked lists representing non-negative integers,
 * where each node contains a single digit, and adds them together.
 * The result is returned as a new singly-linked list.
 * 
 * Algorithm Steps:
 * 1. Initialization:
 *    - Initialize pointers 'curr1' and 'curr2' to traverse input linked lists 'l1' and 'l2'.
 *    - Initialize 'remainder' to 0 to keep track of the carry-over from addition.
 *    - Create a dummy node 'dummyHead' to store the result list.
 *    - Initialize a pointer 'rcurr' to point to 'dummyHead'.
 * 
 * 2. Addition:
 *    - Iterate through both linked lists until both 'curr1' and 'curr2' become null.
 *    - At each iteration:
 *      - Calculate the sum of current digits from 'l1', 'l2', and the carry-over 'remainder'.
 *      - Update 'remainder' to the carry-over from the sum (0 or 1).
 *      - Calculate the digit to be placed in the result list as the remainder of the sum divided by 10.
 *      - Create a new node with the calculated digit and append it to the result list.
 *      - Move 'rcurr' pointer to the next node in the result list.
 *      - Move 'curr1' and 'curr2' pointers to their next nodes if they are not null.
 * 
 * 3. Finalization:
 *    - If 'remainder' is greater than 0 after the iteration, append a new node with 'remainder' to the result list.
 * 
 * 4. Return:
 *    - Return the next node after the dummy node, which is the head of the result list.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(max(m, n)), where 'm' and 'n' are the lengths of the input linked lists 'l1' and 'l2', respectively.
 *    The function iterates through both lists once.
 * - Space Complexity: O(max(m, n)), where 'm' and 'n' are the lengths of the input linked lists 'l1' and 'l2', respectively.
 *    Additional space is used to store the result list.
 */

var addTwoNumbers = function (l1, l2) {
    let curr1 = l1; // Pointer for traversing linked list 'l1'
    let curr2 = l2; // Pointer for traversing linked list 'l2'
    let remainder = 0; // Carry-over from addition
    let dummyHead = new ListNode(0); // Dummy head of the result list
    let rcurr = dummyHead; // Pointer to traverse the result list

    // Iterate through both linked lists 'l1' and 'l2'
    while (curr1 !== null || curr2 !== null) {
        let sum = remainder;
        sum += (curr1 !== null) ? curr1.val : 0;
        sum += (curr2 !== null) ? curr2.val : 0;

        // Calculate the carry-over and update the sum
        remainder = Math.floor(sum / 10);
        sum %= 10;

        // Create a new node with the calculated sum and append it to the result list
        rcurr.next = new ListNode(sum);
        rcurr = rcurr.next;

        // Move pointers to the next nodes in linked lists 'l1' and 'l2'
        if (curr1 !== null) curr1 = curr1.next;
        if (curr2 !== null) curr2 = curr2.next;
    }

    // Append a new node with 'remainder' to the result list if 'remainder' is greater than 0
    if (remainder > 0) {
        rcurr.next = new ListNode(remainder);
    }

    // Return the next node after the dummy node, which is the head of the result list
    return dummyHead.next;
};
