import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Logo() {
  const { scene } = useGLTF("/models/base_basic_shaded.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;

      // Floating effect
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return <primitive ref={ref} object={scene} scale={1} />;
}

export default function Logo3D() {
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Logo />

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
