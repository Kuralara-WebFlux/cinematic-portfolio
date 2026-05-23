"use client";

import { Canvas } from "@react-three/fiber";

export default function Particles() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
