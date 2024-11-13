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
  Group,
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
  const forms = data.forms.map((form, index) => (
    <Anchor
      size="xl"
      href={"/forms/" + locale + "/" + form.href}
      target="_blank"
      key={index}
    >
      {t.get(form.link)}
    </Anchor>
  ));

  const checklist = data.checklist.map((item, index) => (
    <List.Item key={index}>
      <Text size="xl">{t.get(item)}</Text>
      {index == 0 && forms[2]}
      {index == 4 && forms[0]}
      {index == 5 && (
        <Group>
          {forms[3]}
          {forms[1]}
        </Group>
      )}
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
