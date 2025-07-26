import json
import networkx as nx
import matplotlib.pyplot as plt
import math

# Load mall data from JSON
with open("data\mall_map.json", "r") as file:
    data = json.load(file)

# Extract stores and corridors
stores = {store["id"]: (store["x"], store["y"]) for store in data["stores"]}
corridors = data["corridors"]

# Function to calculate Euclidean distance
def euclidean_distance(store1, store2):
    x1, y1 = stores[store1]
    x2, y2 = stores[store2]
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

# Create graph
G = nx.Graph()
for store in stores:
    G.add_node(store, pos=stores[store])

for corridor in corridors:
    store1, store2 = corridor["from"], corridor["to"]
    distance = euclidean_distance(store1, store2)
    G.add_edge(store1, store2, weight=distance)

# Get user input
source = input("Enter source store ID: ").strip()
destination = input("Enter destination store ID: ").strip()

# Find shortest path
shortest_path = nx.shortest_path(G, source=source, target=destination, weight="weight")

# Visualization
plt.figure(figsize=(8, 6))
pos = nx.get_node_attributes(G, "pos")
labels = {node: node for node in G.nodes}

# Draw entire graph
nx.draw(G, pos, with_labels=True, node_color="lightgray", edge_color="gray", node_size=700, font_size=10)
nx.draw_networkx_edge_labels(G, pos, edge_labels={(u, v): f"{d['weight']:.2f}" for u, v, d in G.edges(data=True)})

# Highlight shortest path
path_edges = list(zip(shortest_path, shortest_path[1:]))
nx.draw(G, pos, edgelist=path_edges, edge_color="red", width=2)
nx.draw_networkx_nodes(G, pos, nodelist=shortest_path, node_color="blue", node_size=800)

plt.title(f"Shortest Path from {source} to {destination}")
plt.show()

# Print the shortest path
print(f"Shortest Path: {' → '.join(shortest_path)}")
