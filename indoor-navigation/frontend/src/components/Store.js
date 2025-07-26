import { Text } from "@react-three/drei";

export default function Store({ position, name, category }) {
  return (
    <group position={position}>
      {/* Store Box */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color={
            category === "clothing" ? "lightblue" :
            category === "food" ? "orange" :
            "gold"
          }
        />
      </mesh>

      {/* Store Name Label */}
      <Text position={[0, 1.5, 0]} fontSize={0.4} color="black">
        {name}
      </Text>
    </group>
  );
}
