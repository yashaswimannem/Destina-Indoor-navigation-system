import mallData from "../data/stores.json";

// 🛠 Function to Build the Navigation Graph
const buildGraph = () => {
    let graph = {};

    // ✅ Step 1: Add Store-to-Corridor Connections from `corridors`
    mallData.corridors.forEach(({ from, to }) => {
        if (!graph[from]) graph[from] = {};
        if (!graph[to]) graph[to] = {};

        const fromNode = mallData.stores.find(store => store.id === from);
        const toNode = mallData.stores.find(store => store.id === to);

        if (fromNode && toNode) {
            const distance = Math.sqrt(
                Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2)
            );
            graph[from][to] = distance;
            graph[to][from] = distance;
        }
    });

    // ✅ Step 2: Add Corridor-to-Corridor Connections from `Walkable_paths`
    mallData.Walkable_paths.forEach(({ from, to }) => {
        if (!graph[from]) graph[from] = {};
        if (!graph[to]) graph[to] = {};

        const fromNode = mallData.stores.find(store => store.id === from);
        const toNode = mallData.stores.find(store => store.id === to);

        if (fromNode && toNode) {
            const distance = Math.sqrt(
                Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2)
            );
            graph[from][to] = distance;
            graph[to][from] = distance;
        }
    });

    console.log("📌 Updated Graph:", graph);
    return graph;
};

// 🛠 Dijkstra’s Algorithm to Find Shortest Path
const dijkstra = (graph, startNode, endNode) => {
    let distances = {};
    let prev = {};
    let pq = new Set(Object.keys(graph));

    Object.keys(graph).forEach(node => {
        distances[node] = Infinity;
    });
    distances[startNode] = 0;

    while (pq.size) {
        let minNode = [...pq].reduce((min, node) => (distances[node] < distances[min] ? node : min), [...pq][0]);

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

    console.log("✅ Shortest Path Found:", path);
    return path;
};

// 🛠 Function to Find Shortest Path Between Two Stores
export const findShortestPath = (start, end) => {
    console.log(`🔍 Finding path from: ${start} to: ${end}`);
    const graph = buildGraph();
    return dijkstra(graph, start, end);
};
