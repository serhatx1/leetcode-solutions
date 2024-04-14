/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(0); // Create a dummy node to serve as the head of the merged list
    let curr = dummy; // Pointer to traverse the merged list

    // Iterate until either 'list1' or 'list2' becomes null
    while (list1 && list2) {
        // Choose the smaller value between the heads of 'list1' and 'list2'
        if (list1.val < list2.val) {
            curr.next = new ListNode(list1.val); // Append the smaller value to the merged list
            list1 = list1.next; // Move to the next node in 'list1'
        } else {
            curr.next = new ListNode(list2.val); // Append the smaller value to the merged list
            list2 = list2.next; // Move to the next node in 'list2'
        }
        curr = curr.next; // Move the 'curr' pointer to the next node in the merged list
    }

    // Append the remaining nodes of 'list1' or 'list2' to the merged list
    if (list1 !== null) {
        curr.next = list1;
    }
    if (list2 !== null) {
        curr.next = list2;
    }

    // Return the head of the merged list (excluding the dummy node)
    return dummy.next;
};
