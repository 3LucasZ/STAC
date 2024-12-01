"use client";

import { Canvas, useLoader } from "@react-three/fiber";

import { BackSide, TextureLoader } from "three";
import { Suspense } from "react";
import { ActionIcon, AspectRatio, Box, Modal } from "@mantine/core";
import { OrbitControls } from "@react-three/drei";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowsDiagonal,
  IconArrowsDiagonalMinimize,
  IconArrowsMinimize,
} from "@tabler/icons-react";

type Props = {
  url: string;
};

export default function Image360(props: Props) {
  const [opened, { open, close }] = useDisclosure(false);
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

  const component2 = (
    <Box
      pos={"relative"}
      style={(theme) => ({
        borderRadius: theme.radius.lg,
        overflow: "hidden",
      })}
    >
      <Box pos={"absolute"} right={15} top={15} style={{ zIndex: 100 }}>
        <ActionIcon
          variant="gradient"
          size="xl"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
          onClick={() => {
            if (opened) close();
            else open();
          }}
        >
          {opened ? <IconArrowsDiagonalMinimize /> : <IconArrowsDiagonal />}
        </ActionIcon>
      </Box>
      <AspectRatio ratio={1080 / 720}>{component}</AspectRatio>
    </Box>
  );

  return (
    <>
      {component2}
      <Modal
        opened={opened}
        onClose={close}
        // title="This is a fullscreen modal"
        fullScreen
        // radius={0}
        withCloseButton={false}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        {component2}
      </Modal>
    </>
  );
}
