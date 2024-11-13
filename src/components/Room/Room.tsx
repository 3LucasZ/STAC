import {
  Card,
  Image,
  Group,
  Text,
  Button,
  Box,
  Stack,
  Modal,
  Title,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Room.module.css";
import { useDisclosure } from "@mantine/hooks";

export function Room({
  name,
  description,
  locale,
}: {
  name: string;
  description: string;
  locale: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  var items: number[] | string[] = [];
  switch (name.toLowerCase()) {
    case "harmony":
      // items = [1];
      items = [
        "https://placehold.co/600x400?text=Coming soon!",
        "https://placehold.co/600x400?text=Coming soon!",
      ];
      break;
    case "jade":
      items = [0, 1, 2, 3, 4];
      break;
    case "lotus":
      items = [0, 1, 2, 3];
      break;
    case "pagoda":
      items = [0, 1, 2];
      break;
    case "phoenix":
      items = [0, 1, 2, 3];
      break;
  }
  const imgs = items.map((item, index) => (
    <Image
      src={
        typeof item === "number"
          ? "/images/rooms/" + name.toLowerCase() + "/" + item + ".jpg"
          : item
      }
      key={index}
    ></Image>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        // title="Authentication"
        centered
        size={"100%"}
        withCloseButton={false}
      >
        {/* Modal content */}
        <Stack>
          <Title ta={"center"}>{name}</Title>
          <SimpleGrid>{imgs}</SimpleGrid>
        </Stack>
      </Modal>
      <Card
        shadow="lg"
        padding="lg"
        radius="lg"
        withBorder
        className={classes.card}
        onClick={open}
      >
        <Card.Section style={{ overflow: "hidden" }}>
          <Image
            src={imgs[1].props.src}
            height={400}
            alt={name}
            className={classes.image}
          />
        </Card.Section>
        <Box h={20}></Box>
        <Stack>
          <Text fw={600} size="xl">
            {name}
          </Text>
          <Text size="xl" c="dimmed">
            {description}
          </Text>
          {/* <Button color="blue">Book</Button> */}
        </Stack>
      </Card>
    </>
  );
}
