"use client";
import { ContactUs } from "@/app/[locale]/contact/ContactUs/ContactUs";
import { List, Stack, Title, Text, Container, Anchor } from "@mantine/core";
import data from "./data.json";
import { Translator } from "@/utils";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = new Translator(locale);

  const checklist = data.services.map((item, index) => (
    <List.Item key={index}>
      <Text size="xl">{t.get(item)}</Text>
    </List.Item>
  ));
  return (
    <Stack>
      <Title ta="center" py={20} c={"blue"}>
        {t.get(data.title)}
      </Title>
      <Container>
        <List>{checklist}</List>
      </Container>
    </Stack>
  );
}
