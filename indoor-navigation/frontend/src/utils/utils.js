export function isPathWalkable(storeA, storeB, corridors) {
    return corridors.some(corridor => 
        (corridor.from === storeA.id && corridor.to === storeB.id) || 
        (corridor.from === storeB.id && corridor.to === storeA.id)
    );
}
