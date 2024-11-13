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
  var items: number[] = [];
  switch (name.toLowerCase()) {
    case "harmony":
      items = [1];
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
          <SimpleGrid>
            {items.map((item, index) => (
              <Image
                src={
                  "/images/rooms/" + name.toLowerCase() + "/" + item + ".jpg"
                }
                key={index}
              ></Image>
            ))}
          </SimpleGrid>
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
            src={"/images/rooms/" + name.toLowerCase() + "/1.jpg"}
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
