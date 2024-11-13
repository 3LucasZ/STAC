"use client";
import { ContactUs } from "@/app/[locale]/contact/ContactUs/ContactUs";
import { Translator } from "@/utils";
import { Stack, Container, Title, Image, SimpleGrid, Box } from "@mantine/core";
import data from "./data.json";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = new Translator(locale);
  const contacts = [
    { title: t.get(data.weChat), src: "/images/socials/wechat.png" },
    { title: t.get(data.whatsApp), src: "/images/socials/whatsapp.png" },
    { title: t.get(data.line), src: "/images/socials/line.jpg" },
    { title: t.get(data.x), src: "/images/socials/twitter.jpg" },
  ];
  const contactItems = contacts.map((contact, index) => (
    <Stack align="center" key={index}>
      <Title>{contact.title}</Title>
      <Image
        src={contact.src}
        // mah={400}
        // w={"auto"}
        // fit="contain"
      />
    </Stack>
  ));
  return (
    <Container pt={80}>
      <ContactUs locale={locale}></ContactUs>
      <Box h={80}></Box>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>{contactItems}</SimpleGrid>
    </Container>
  );
}
