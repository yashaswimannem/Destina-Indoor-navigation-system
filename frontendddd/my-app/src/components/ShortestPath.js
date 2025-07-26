import lgData from "../data/stores_lg.json";
import ugData from "../data/stores_ug.json";

const getStoreFromAllFloors = (id) => {
  const fromLG = lgData.stores.find((store) => store.id === id);
  if (fromLG) return { store: fromLG, floor: "LG", data: lgData };

  const fromUG = ugData.stores.find((store) => store.id === id);
  if (fromUG) return { store: fromUG, floor: "UG", data: ugData };

  return null;
};

const buildGraph = (mallData) => {
  let graph = {};

  mallData.corridors.forEach(({ from, to }) => {
    if (!graph[from]) graph[from] = {};
    if (!graph[to]) graph[to] = {};

    const fromNode = mallData.stores.find((store) => store.id === from);
    const toNode = mallData.stores.find((store) => store.id === to);

    if (fromNode && toNode) {
      const distance = Math.hypot(toNode.x - fromNode.x, toNode.y - fromNode.y);
      graph[from][to] = distance;
      graph[to][from] = distance;
    }
  });

  mallData.Walkable_paths.forEach(({ from, to }) => {
    if (!graph[from]) graph[from] = {};
    if (!graph[to]) graph[to] = {};

    const fromNode = mallData.stores.find((store) => store.id === from);
    const toNode = mallData.stores.find((store) => store.id === to);

    if (fromNode && toNode) {
      const distance = Math.hypot(toNode.x - fromNode.x, toNode.y - fromNode.y);
      graph[from][to] = distance;
      graph[to][from] = distance;
    }
  });

  return graph;
};

const dijkstra = (graph, startNode, endNode) => {
  let distances = {};
  let prev = {};
  let pq = new Set(Object.keys(graph));

  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
  });
  distances[startNode] = 0;

  while (pq.size) {
    let minNode = [...pq].reduce(
      (min, node) => (distances[node] < distances[min] ? node : min),
      [...pq][0]
    );

    if (minNode === endNode) break;
    pq.delete(minNode);

    for (let neighbor in graph[minNode]) {
      let newDist = distances[minNode] + graph[minNode][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        prev[neighbor] = minNode;
      }
    }
  }

  let path = [];
  let step = endNode;
  while (prev[step]) {
    path.unshift(step);
    step = prev[step];
  }
  if (distances[endNode] !== Infinity) path.unshift(startNode);

  return path;
};

export const findShortestPath = (start, end) => {
  console.log(`🔍 Finding path from: ${start} to: ${end}`);

  const startInfo = getStoreFromAllFloors(start);
  const endInfo = getStoreFromAllFloors(end);

  if (!startInfo || !endInfo) {
    console.error("❌ One or both locations not found.");
    return [];
  }

  // 🚨 If source and destination are on different floors
  if (startInfo.floor !== endInfo.floor) {
    alert("🚧 Cross-floor navigation is not supported yet.");
    return [];
  }

  const graph = buildGraph(startInfo.data);
  return dijkstra(graph, start, end);
};
