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
import { Carousel } from "@mantine/carousel";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = new Translator(locale);
  const bathroomImages = [1, 2, 3, 4].map((x, index) => (
    <Image
      src={"/STAC/images/bathroom/" + x + ".jpg"}
      radius={"lg"}
      key={index}
      // h={400}
    />
  ));
  const commonAreaImages = [1, 2, 3, 4].map((x, index) => (
    <Image
      src={"/STAC/images/common-areas/" + x + ".jpg"}
      radius={"lg"}
      key={index}
      // h={400}
    />
  ));

  const checklist = data.services.map((item, index) => (
    <List.Item key={index}>
      <Text size="xl">{t.get(item)}</Text>
    </List.Item>
  ));

  return (
    <Container>
      <Stack>
        <Title ta="center" py={20} c={"blue"}>
          {t.get(data.title)}
        </Title>

        <List>{checklist}</List>

        <Title ta="center" py={20} c={"blue"}>
          {t.get(data.a.title)}
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing={30}>
          {commonAreaImages}
        </SimpleGrid>

        <Title ta="center" py={20} c={"blue"}>
          {t.get(data.b.title)}
        </Title>
        <Carousel slideSize="70%" slideGap="lg" loop dragFree>
          {bathroomImages.map((img, index) => (
            <Carousel.Slide key={index}>{img}</Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
}
