"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { List, Stack, Title, Text, Container, Anchor } from "@mantine/core";
import data from "./data.json";
import { Translator } from "@/utils";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = new Translator(locale);

  const checklist = data.services.map((item) => (
    <List.Item>
      <Text size="xl">{t.get(item)}</Text>
    </List.Item>
  ));
  return (
    <Stack>
      <Title ta="center" py={20} c={"blue"}>
        Additional Services
      </Title>
      <Container>
        <List>{checklist}</List>
      </Container>
    </Stack>
  );
}
