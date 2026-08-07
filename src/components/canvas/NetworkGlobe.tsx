import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const NODE_COUNT = 40;
const CORE_RADIUS = 1.3;

/** Fibonacci-sphere distributed node points on the core */
const useNodePositions = (count: number, radius: number) =>
  useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      points.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        )
      );
    }
    return points;
  }, [count, radius]);

const CoreSphere = () => {
  const nodePositions = useNodePositions(NODE_COUNT, CORE_RADIUS);
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const connectionLines = useMemo(() => {
    const positions: number[] = [];
    const CONNECTION_DISTANCE = 0.75;
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < CONNECTION_DISTANCE) {
          positions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }
    return new Float32Array(positions);
  }, [nodePositions]);

  const nodeFlat = useMemo(() => {
    const arr = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [nodePositions]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.size = 0.045 + Math.sin(t * 2) * 0.015;
    }
  });

  return (
    <group>
      <mesh>
        <icosahedronGeometry args={[CORE_RADIUS, 2]} />
        <meshBasicMaterial color="#915EFF" wireframe transparent opacity={0.25} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[CORE_RADIUS * 0.55, 1]} />
        <meshBasicMaterial color="#00d1b2" transparent opacity={0.15} />
      </mesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connectionLines.length / 3}
            array={connectionLines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00d1b2" transparent opacity={0.4} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length}
            array={nodeFlat}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={materialRef}
          color="#c4b5fd"
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
    </group>
  );
};

type OrbitRingProps = {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  color: string;
  opacity?: number;
};

const OrbitRing: React.FC<OrbitRingProps> = ({ radius, tilt, speed, color, opacity = 0.5 }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={tilt} ref={ref}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 8, 128]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
      {/* traveling node on the ring */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
};

const ArmillaryGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      <CoreSphere />

      <OrbitRing radius={1.9} tilt={[Math.PI / 2.2, 0, 0]} speed={0.35} color="#915EFF" opacity={0.55} />
      <OrbitRing radius={2.25} tilt={[Math.PI / 2.8, Math.PI / 6, 0]} speed={-0.22} color="#00d1b2" opacity={0.4} />
      <OrbitRing radius={2.6} tilt={[Math.PI / 1.9, -Math.PI / 5, Math.PI / 8]} speed={0.15} color="#f7b731" opacity={0.3} />
    </group>
  );
};

const NetworkGlobeCanvas = () => {
  return (
    <div className="relative h-full w-full">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.6} />
          <ArmillaryGlobe />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.6}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.6}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default NetworkGlobeCanvas;