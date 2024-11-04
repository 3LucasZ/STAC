import { Card, Image, Group, Text, Button } from "@mantine/core";

export function Room({
  name,
  description,
  locale,
}: {
  name: string;
  description: string;
  locale: string;
}) {
  return (
    <Card shadow="lg" padding="lg" radius="lg" withBorder>
      <Card.Section>
        <Image
          src={"/STAC/images/rooms/" + name.toLowerCase() + "/1.jpg"}
          height={400}
          alt={name}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={600} size="xl">
          {name}
        </Text>
        {/* <Badge color="pink">On Sale</Badge> */}
      </Group>

      <Text size="xl" c="dimmed">
        {description}
      </Text>

      {/* <Button color="blue" fullWidth mt="md" radius="md">
        Book
      </Button> */}
    </Card>
  );
}
