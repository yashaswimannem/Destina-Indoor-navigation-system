import matplotlib.pyplot as plt
import matplotlib.image as mpimg

# Load the map image
map_path = r"C:\Users\Yashaswi\Documents\Projects\indoor navigation\data\map.png"
img = mpimg.imread(map_path)

# Define points
data = [
    {"id":"mc1","name":"main corridor","x":385,"y":357},
    {"id":"mc2","name":"main corridor","x":448,"y":341},
    {"id":"mc3","name":"main corridor","x":545,"y":339},
    {"id":"mc4","name":"main corridor","x":682,"y":348},
    {"id":"mc5","name":"main corridor","x":720,"y":437},
    {"id":"mc6","name":"main corridor","x":722,"y":506},
    {"id":"mc7","name":"main corridor","x":726,"y":560},
    {"id":"mc8","name":"main corridor","x":721,"y":621},
    {"id":"mc9","name":"main corridor","x":726,"y":560},
    {"id":"mc10","name":"main corridor","x":717,"y":756},
    {"id":"mc11","name":"main corridor","x":702,"y":823},
    {"id":"mc12","name":"main corridor","x":616,"y":820},
    {"id":"mc13","name":"main corridor","x":611,"y":850},
    {"id":"mc14","name":"main corridor","x":540,"y":884},
    {"id":"mc15","name":"main corridor","x":471,"y":846},
    {"id":"mc16","name":"main corridor","x":394,"y":774},
    {"id":"mc17","name":"main corridor","x":384,"y":637},
    {"id":"mc18","name":"main corridor","x":377,"y":564},
    {"id":"mc19","name":"main corridor","x":375,"y":493},
    {"id":"mc20","name":"main corridor","x":400,"y":421},
    {"id":"lc21","name":"left corridor","x":286,"y":501},
    {"id":"lc22","name":"left corridor","x":190,"y":500},
    {"id":"lc23","name":"left corridor","x":139,"y":524},
    {"id":"lc24","name":"left corridor","x":158,"y":646},
    {"id":"lc25","name":"left corridor","x":191,"y":601},
    {"id":"lc26","name":"left corridor","x":252,"y":578},
    {"id":"rc27","name":"right corridor","x":759,"y":474},
    {"id":"rc28","name":"right corridor","x":834,"y":473},
    {"id":"rc29","name":"right corridor","x":887,"y":470},
    {"id":"rc30","name":"right corridor","x":903,"y":419},
    {"id":"rc31","name":"right corridor","x":930,"y":475},
    {"id":"rc32","name":"right corridor","x":972,"y":474},
    {"id":"rc33","name":"right corridor","x":972,"y":421},
    {"id":"dc34","name":"down corridor","x":548,"y":957},
    {"id":"dc35","name":"down corridor","x":709,"y":897},
    {"id":"dc36","name":"down corridor","x":948,"y":948},
    {"id":"dc37","name":"down corridor","x":711,"y":996}
]

# Extract x and y coordinates
x_coords = [point["x"] for point in data]
y_coords = [point["y"] for point in data]
labels = [point["id"] for point in data]

# Plot the map and points
plt.figure(figsize=(10, 8))
plt.imshow(img, origin='lower')  # Flip the image to correct orientation
plt.scatter(x_coords, y_coords, color='red', s=40)

# Annotate each point with its ID
for i, label in enumerate(labels):
    plt.text(x_coords[i] + 10, y_coords[i], label, fontsize=9, color='black')

plt.xlabel("X Coordinates")
plt.ylabel("Y Coordinates")
plt.title("Corridor Map with Points")
plt.grid(True)
plt.show()