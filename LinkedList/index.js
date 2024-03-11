import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.addNode({ data: 1, next: null });
list.addNode({ data: 2, next: null });
list.addNode({ data: 3, next: null });
list.addNode({ data: 100, next: null });

LinkedList.reverseRecursively(list.getHead);
list.showItems();
