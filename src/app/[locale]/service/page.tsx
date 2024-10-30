"use client";
import { ContactUs } from "@/app/[locale]/contact/ContactUs/ContactUs";
import {
  List,
  Stack,
  Title,
  Text,
  Container,
  Anchor,
  Image,
  SimpleGrid,
} from "@mantine/core";
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
  const plans = [1, 2, 3, 4].map((id) => {
    return (
      <Image src={"/STAC/images/floor-plans/plan" + id + ".jpeg"} key={id} />
    );
  });
  return (
    <Container>
      <Stack>
        <Title ta="center" py={20} c={"blue"}>
          {t.get(data.title)}
        </Title>

        <List>{checklist}</List>

        <Title ta="center" py={20} c={"blue"}>
          {t.get(data.floorPlans.title)}
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>{plans}</SimpleGrid>
      </Stack>
    </Container>
  );
}
