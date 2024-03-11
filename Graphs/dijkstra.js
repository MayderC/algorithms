import { PriorityQueue } from "./priority_queue.js";

class Node {
  constructor(vertex, edge = 0) {
    this.vertex;
    this.edge;
  }
}

const graph = {
  0: [
    { node: 5, long: 10 },
    { node: 3, long: 2 },
    { node: 4, long: 2 },
    { node: 1, long: 3 },
    { node: 2, long: 5 },
  ],
  5: [
    { node: 0, long: 10 },
    { node: 4, long: 3 },
    { node: 3, long: 7 },
  ],
  3: [
    { node: 0, long: 2 },
    { node: 5, long: 7 },
    { node: 4, long: 2 },
  ],
  2: [
    { node: 0, long: 5 },
    { node: 1, long: 1 },
  ],
  1: [
    { node: 0, long: 3 },
    { node: 4, long: 4 },
  ],
  4: [
    { node: 2, long: 2 },
    { node: 3, long: 2 },
    { node: 5, long: 3 },
  ],
};

dijkstra(graph, 0, 5);

function dijkstra(graph, node, target) {
  const queue = new PriorityQueue("long");
  queue.enqueue({ node, long: 0 });

  const visited = new Set();

  while (queue.isEmpty == false) {
    const current = queue.dequeue();
    console.log(graph[current.node]);
    for (const item of graph[current.node]) {
      console.log(item.node);
      if (visited.has(item.node) == false) {
        visited.add(item.node);
        queue.enqueue({ node, long: item.long + current.long });
      }
    }
    console.log(queue.get);
  }
  console.log(visited);
}
