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
  const link1 = (
    <Anchor
      size="xl"
      href="https://raec.rocklinusd.org/documents/gradportfoliofiles/standard%20application.pdf"
      target="_blank"
    >
      {"(Download Link)"}
    </Anchor>
  );
  const link2 = (
    <Anchor
      size="xl"
      href="https://raec.rocklinusd.org/documents/gradportfoliofiles/standard%20application.pdf"
      target="_blank"
    >
      {"(Download Link)"}
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
    <Stack>
      <Title ta="center" py={20} c="blue">
        Dorm Applications
      </Title>
      <Container>
        <Stack>
          <Text size="xl">
            All application documents must be original or certified; no e-mail,
            scans or, copies will be accepted.
          </Text>
          <Title order={3} c={"blue"}>
            Application Checklist:
          </Title>
          <List>{checklist}</List>
        </Stack>
      </Container>
    </Stack>
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
