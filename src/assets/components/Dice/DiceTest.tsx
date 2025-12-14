import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { RefObject } from "react";

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#222" />
    </mesh>
  );
}

function Dice({ rollRef }: { rollRef: RefObject<(() => void) | null> }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0],
    args: [1, 1, 1],
  }));

  // Permet de lancer le dé depuis l'extérieur
  rollRef.current = () => {
    api.position.set(0, 2, 0);
    api.velocity.set(
      (Math.random() - 0.5) * 10,
      10,
      (Math.random() - 0.5) * 10
    );
    api.angularVelocity.set(
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    );
  };

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function DiceTest() {
  const rollRef = useRef<(() => void) | null>(null);


  const rollDice = () => {
    if (rollRef.current) rollRef.current();
  };

  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Physics gravity={[0, -9.81, 0]}>
          <Ground />
          <Dice rollRef={rollRef} />
        </Physics>
        <OrbitControls />
      </Canvas>

      <button type="button" onClick={rollDice} style={{ marginTop: "20px" }}>
        Lancer le dé
      </button>
    </div>
  );
}
