/** helper function */
function Node(val) {
  let obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

/** helper list */
let list = Node('A');
let nodeB = list.next = Node('B');
let nodeC = nodeB.next = Node('C');
let nodeD = nodeC.next = Node('D');
let nodeE = nodeD.next = Node('E');

function insertFromEnd(linkedList, value, offset) {
  let n = linkedList;
  let length = 0;

  while (n !== null) {
    length += 1;
    n = n.next;
  }

  if (offset > length) return linkedList;
  if (length === offset) return {value: value, next: linkedList};

  n = linkedList;
  for (let i = 1; i < length - offset; i++) {
    n = n.next;
  }

  let temp = n.next;
  n.next = {value: value, next: temp};

  return linkedList;
}

function reverseLinkedList(linkedList) {
  if (linkedList.next === null) return linkedList;
  let prev = null;
  let next = linkedList.next;
  while (next) {
    linkedList.next = prev;
    prev = linkedList;
    linkedList = next;
    next = next.next;
  }
  linkedList.next = prev;
  return linkedList;
}

function reverseLinkedListClean(linkedList) {
  let current = linkedList;
  let reverse = null;
  let head = current;
  while (current) {
    current = current.next;
    head.next = reverse;
    reverse = head;
    head = current;
  }
  return reverse;
}

function hasCycle(linkedList) {
  let trailer = linkedList;
  let runner = linkedList;
  while (trailer.next && runner.next && runner.next.next) {
    trailer = trailer.next;
    runner = runner.next.next;
    if (trailer.value === runner.value) return true;
  }
  return false;
}