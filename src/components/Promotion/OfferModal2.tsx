// components/LeaseOfferModal.tsx
"use client";

import {
  Modal,
  Button,
  Text,
  Title,
  Stack,
  Group,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconGift } from "@tabler/icons-react";
import { useEffect } from "react";

// Define the props the component will accept

export function OfferModal2() {
  const [opened, { open, close }] = useDisclosure(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      open();
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [open]);
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered // Vertically centers the modal
      size="md"
      radius="lg"
      shadow="xl"
      withCloseButton={true} // We'll make our own flow
      padding="xl"
    >
      <Stack align="center" gap="md">
        <ThemeIcon
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
          size={rem(80)}
          radius="50%"
        >
          <IconGift style={{ width: rem(48), height: rem(48) }} stroke={1.5} />
        </ThemeIcon>

        <Title order={2} ta="center">
          Limited Time Offer!
        </Title>

        <Text c="dimmed" ta="center" mt="xs">
          Don't miss this incredible opportunity to save on your new apartment.
        </Text>

        <Stack align="center" gap={4} mt="md">
          <Text size="5xl" fw={900}>
            1 Month
          </Text>
          <Text
            size="5xl"
            fw={700}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
          >
            FREE
          </Text>
          <Text size="lg" fw={500} mt="xs">
            with any one-year lease
          </Text>
        </Stack>

        <Group mt="xl" grow w="100%">
          {/* <Button onClick={close} variant="outline" size="lg" radius="md">
            Maybe Later
          </Button> */}
          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            size="lg"
            radius="md"
            onClick={() => {
              // Add your navigation or action logic here
              alert("Redirecting to available units...");
              close();
            }}
          >
            Claim My Free Month
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
