import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Particles = ({ count = 1400 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color={new THREE.Color("hsl(234, 64%, 32%)")}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-hero" />
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 55 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
};
