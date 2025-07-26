import json

# Load the JSON file
file_path = "project\data\mall_map.json"  # Change this if needed

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# Create a mapping of cleaned store names
store_name_map = {}

# Clean store names in "stores" section
for store in data["stores"]:
    cleaned_name = store["id"].strip()  # Remove spaces
    store_name_map[store["id"]] = cleaned_name  # Store mapping
    store["id"] = cleaned_name  # Update store ID in JSON

# Clean "corridors" references
for corridor in data["corridors"]:
    corridor["from"] = store_name_map.get(corridor["from"].strip(), corridor["from"].strip())
    corridor["to"] = store_name_map.get(corridor["to"].strip(), corridor["to"].strip())

# Save the cleaned JSON
cleaned_file_path = "project\data\malllg_map.json"

with open(cleaned_file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

print("✅ Cleaned JSON saved as mall_map_cleaned.json")
