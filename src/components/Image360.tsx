"use client";

import { Canvas, useLoader } from "@react-three/fiber";

import {
  BackSide,
  EquirectangularReflectionMapping,
  LinearFilter,
  LinearMipMapLinearFilter,
  SRGBColorSpace,
  TextureLoader,
} from "three";
import { Suspense } from "react";
import { ActionIcon, AspectRatio, Box, Modal } from "@mantine/core";
import { OrbitControls } from "@react-three/drei";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowsDiagonal,
  IconArrowsDiagonalMinimize,
  IconArrowsMinimize,
} from "@tabler/icons-react";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";

type Props = {
  url: string;
};

export default function Image360(props: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const texture = useLoader(TextureLoader, props.url);
  texture.mapping = EquirectangularReflectionMapping;
  texture.colorSpace = SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  const component = (
    <Canvas camera={{ position: [0, 0, 0.1], zoom: 0.9 }}>
      <OrbitControls
        minAzimuthAngle={-1}
        maxAzimuthAngle={1.5}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        autoRotate
        autoRotateSpeed={0.25}
        rotateSpeed={0.5}
      />
      <Suspense fallback={null}>
        <mesh scale={[-100, 100, 100]}>
          <sphereGeometry attach="geometry" args={[4, 60, 30]} />
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
      <Box pos={"absolute"} right={15} top={15} style={{ zIndex: 10 }}>
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
      <AspectRatio ratio={16 / 9}>{component}</AspectRatio>
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
