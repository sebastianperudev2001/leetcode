class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null;

  let current = head;
  const map = new Map<_Node, _Node>();

  while (current) {
    map.set(current, new _Node(current.val));
    current = current.next!;
  }
  current = head;

  while (current) {
    const copy = map.get(current)!;
    copy.next = current.next ? map.get(current.next)! : null;
    copy.random = current.random ? map.get(current.random)! : null;
    current = current.next!;
  }
  return map.get(head)!;
}
