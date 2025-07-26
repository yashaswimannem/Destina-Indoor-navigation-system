// src/utils/generateVoiceInstructions.js
import { speak } from "./speak";

export function generateVoiceInstructions(path, stores) {
  const instructions = [];
  const pixelsPerMeter = 10; // adjust this value to calibrate distance

  for (let i = 0; i < path.length - 1; i++) {
    const current = stores.find(s => s.id === path[i]);
    const next = stores.find(s => s.id === path[i + 1]);

    // Skip if internal/system point like mc1, lc2, etc.
    if (!current || !next) continue;
    if (current.id.toLowerCase().startsWith("mc") || current.id.toLowerCase().startsWith("lc")) {
      continue;
    }

    const direction = getDirection(current, next);
    const pixelDistance = Math.sqrt(
      Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2)
    );
    const distanceInMeters = (pixelDistance / pixelsPerMeter).toFixed(1);

    const sentence = `From ${current.id}, go ${direction} for ${distanceInMeters} meters to reach ${next.id}.`;
    instructions.push(sentence);
  }

  // Speak each instruction one by one
  let index = 0;
  const interval = setInterval(() => {
    if (index < instructions.length) {
      speak(instructions[index]);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 4000); // Delay between instructions

  return instructions;
}

// Direction logic based on coordinate difference
function getDirection(from, to) {
  const dx = to.x - from.x;
  const dy = from.y - to.y;

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? "right" : "left";
  } else {
    return dy > 0 ? "forward" : "backward";
  }
}
