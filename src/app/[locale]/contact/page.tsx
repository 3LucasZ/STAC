"use client";
import { ContactUs } from "@/app/[locale]/contact/ContactUs/ContactUs";
import { Stack, Container, Title, Image, SimpleGrid, Box } from "@mantine/core";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const contacts = [
    { title: "WeChat", src: "/STAC/images/socials/wechat.png" },
    { title: "WhatsApp", src: "/STAC/images/socials/whatsapp.png" },
    { title: "LINE", src: "/STAC/images/socials/line.jpg" },
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
