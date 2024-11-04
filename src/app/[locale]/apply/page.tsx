"use client";
import { ContactUs } from "@/app/[locale]/contact/ContactUs/ContactUs";
import {
  List,
  Stack,
  Title,
  Text,
  Container,
  Image,
  Anchor,
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
  const imageUrls = [
    "/STAC/images/interior.jpg",
    "/STAC/images/interior.jpg",
    "/STAC/images/interior.jpg",
    "/STAC/images/interior.jpg",
    "/STAC/images/interior.jpg",
  ];
  const images = imageUrls.map((url, index) => (
    <Carousel.Slide key={index}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  const link1 = (
    <Anchor
      size="xl"
      href="https://raec.rocklinusd.org/documents/gradportfoliofiles/standard%20application.pdf"
      target="_blank"
    >
      {t.get(data.link)}
    </Anchor>
  );
  const link2 = (
    <Anchor
      size="xl"
      href="https://raec.rocklinusd.org/documents/gradportfoliofiles/standard%20application.pdf"
      target="_blank"
    >
      {t.get(data.link)}
    </Anchor>
  );
  const checklist = data.checklist.map((item, index) => (
    <List.Item key={index}>
      <Text size="xl">{t.get(item)}</Text>
      {index == 0 && link1}
      {index == 5 && link2}
    </List.Item>
  ));
  return (
    <Container>
      <Stack>
        <Title ta="center" py={20} c="blue">
          {t.get(data.title)}
        </Title>

        <Text size="xl">{t.get(data.subtitle)}</Text>
        <Title order={3} c={"blue"}>
          {t.get(data.title2)}
        </Title>
        <List>{checklist}</List>
        {/* <Carousel slideSize="70%" height={500} slideGap="md" loop dragFree>
          {images}
        </Carousel> */}
      </Stack>
    </Container>
  );
}
{
  /* <Anchor
  href="https://raec.rocklinusd.org/documents/gradportfoliofiles/standard%20application.pdf"
  target="_blank"
>
  {" this Parental Release form "}
</Anchor> */
}
