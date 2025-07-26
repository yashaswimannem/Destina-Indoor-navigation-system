const mallStores = [
    "Apollo",
    "souled store",
    "Apple Restaurants Food court",
    "Yousta",
    "GKP opticals",
    "Fastrack",
    "opium",
    "Highlander",
    "Beauty and Nutrie",
    "spar",
    "snitch",
    "New Me",
    "BewaKoof",
    "The indian Garrage Co",
    "Lattliv",
    "campus",
    "Mr.Pronto",
    "King carpets",
    "sk-one",
    "performex",
    "skechers",
    "stride",
    "nike",
    "Reliance Trends",
    "Adidas",
    "Puma",
    "Lenskart",
    "GKB opticals",
    "VISION express",
    "Specta",
    "Saberi's",
    "Titan eye plus",
    "Trends Footware",
    "Show store",
    "Metro",
    "New-u",
    "Unlimited",
    "Miniso",
    "Maniyar",
    "Occult",
    "Haldiram's Sweets",
    "Minilove",
    "Balaji Hosiery",
    "van hausen inner wear(man)",
    "u s polo assn (inner wear)",
    "Amante",
    "Jockey Men(inner wear)",
    "The Good goods",
    "Rushers",
    "5 Miles",
    "Neeman's",
    "Crossword",
    "Blissclub",
    "cricfuse",
    "speedo",
    "crocs",
    "New Balance",
    "reebok",
    "columbia"
  ]
  
  const parseQuery = (message) => {
    const lower = message.toLowerCase();
    let source = null, destination = null;
  
    for (let store of mallStores) {
      const lowerStore = store.toLowerCase();
      if (lower.includes(lowerStore)) {
        if (!destination) destination = store;
        else if (!source) source = store;
      }
    }
  
    // Pattern: "from X to Y"
    const match = lower.match(/from (.+?) to (.+)/);
    if (match) {
      const src = mallStores.find(s => match[1].toLowerCase().includes(s.toLowerCase()));
      const dest = mallStores.find(s => match[2].toLowerCase().includes(s.toLowerCase()));
      if (src) source = src;
      if (dest) destination = dest;
    }
  
    return { source, destination };
  };
  
  module.exports = { parseQuery };
  