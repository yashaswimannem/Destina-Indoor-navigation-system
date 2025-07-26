import cv2
import numpy as np
import json

# Load the PNG image
image = cv2.imread("map.png")

# Convert to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply threshold to detect key areas
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

# Find contours (potential store locations)
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Store locations in JSON
locations = []
for i, contour in enumerate(contours):
    x, y, w, h = cv2.boundingRect(contour)
    locations.append({"id": f"location_{i}", "x": x + w // 2, "y": y + h // 2})

# Save JSON file
mall_map_json = {"locations": locations}
with open("mall_map.json", "w") as f:
    json.dump(mall_map_json, f, indent=4)

print("Conversion complete! JSON saved as mall_map.json")
