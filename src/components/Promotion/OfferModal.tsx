// components/AdvertisementModal.tsx
"use client";

import { useEffect, useState } from "react";
import { Modal, Title, Text, Button, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSessionStorage } from "@mantine/hooks";
import { IconDiscountCheck } from "@tabler/icons-react";

export function OfferModal() {
  const [opened, { open, close }] = useDisclosure(false);
  // const [hasSeenAd, setHasSeenAd] = useSessionStorage({
  //   key: "seen-ad-modal",
  //   defaultValue: false,
  // });
  const [hasSeenAd, setHasSeenAd] = useState(false);

  // After 3 seconds, show the modal if the user hasn't seen it this session
  useEffect(() => {
    if (hasSeenAd) return;

    const timer = setTimeout(() => {
      open();
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasSeenAd, open]);

  const handleClose = () => {
    setHasSeenAd(true);
    close();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      centered
      size="lg"
      padding="xl"
      withCloseButton={true}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Stack align="center" gap="lg">
        <IconDiscountCheck
          size={80}
          stroke={1.5}
          color="var(--mantine-color-teal-5)"
        />

        <Title order={2} ta="center">
          Limited Time Offer!
        </Title>

        <Text size="lg" ta="center">
          Get one month FREE when you sign a one year lease. Don't miss out on
          this exclusive opportunity to save!
        </Text>

        <Group mt="md">
          <Button
            size="lg"
            onClick={() => {
              handleClose();
            }}
          >
            Claim My Free Month
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
