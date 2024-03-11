const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  e: [],
  d: ["f"],
  f: [],
};

function deptFirstSearch(graph, src) {
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    stack.push(...graph[current]);
  }
}

const graph1 = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  e: ["c", "f", "d"],
  d: ["f"],
  f: ["a"],
};

const visited = new Set();

function recursivelyS(graph, src) {
  console.log(src);
  for (let node of graph[src]) {
    if (visited.has(node) == false) {
      visited.add(node);
      recursivelyS(graph, node);
    }
  }
}

recursivelyS(graph1, "a");
console.log(visited);
