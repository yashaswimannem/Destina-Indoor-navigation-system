// speak.js
export function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // Use 'te-IN' for Telugu
    window.speechSynthesis.speak(speech);
  }
  
  // Direction logic
  function getDirection(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
  
    if (Math.abs(dx) > Math.abs(dy)) {
      return dx > 0 ? "right" : "left";
    } else {
      return dy > 0 ? "forward" : "backward";
    }
  }
  
  // 🔹 Voice Instruction Generator
  export function generateVoiceInstructions(path, stores) {
    const instructions = [];
  
    for (let i = 0; i < path.length - 1; i++) {
      const current = stores.find(s => s.id === path[i]);
      const next = stores.find(s => s.id === path[i + 1]);
  
      if (!current || !next) continue;
  
      const direction = getDirection(current, next);
      const distance = Math.round(
        Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2))
      );
  
      instructions.push(`From ${current.id}, go ${direction} for ${distance} units to reach ${next.id}.`);
    }
  
    return instructions;
  }
  