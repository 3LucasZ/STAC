"use client";

import { Canvas, useLoader } from "@react-three/fiber";

import { BackSide, TextureLoader } from "three";
import { Suspense } from "react";
import { AspectRatio, Box } from "@mantine/core";
import { OrbitControls } from "@react-three/drei";

type Props = {
  url: string;
};

export default function Image360(props: Props) {
  const texture = useLoader(TextureLoader, props.url);
  const component = (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        autoRotate
        autoRotateSpeed={0.25}
        rotateSpeed={0.5}
      />
      <Suspense fallback={null}>
        <mesh>
          <sphereGeometry attach="geometry" args={[500, 60, 40]} />
          <meshBasicMaterial attach="material" map={texture} side={BackSide} />
        </mesh>
      </Suspense>
    </Canvas>
  );

  return (
    <Box
      style={(theme) => ({
        borderRadius: theme.radius.lg,
        overflow: "hidden",
      })}
    >
      <AspectRatio ratio={1080 / 720}>{component}</AspectRatio>
    </Box>
  );
}
