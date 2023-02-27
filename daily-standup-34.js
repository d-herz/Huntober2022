// Standup 02-27-2023
// Leetcode: Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var middleNode = function (head) {
  // Loop through the list until .next is no longer true (which would be at the tail)
  // The fast and slow algorithm
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

console.log( middleNode() )
console.log( middleNode() )
console.log( middleNode() )
console.log( middleNode() )