"use client";
import { ContactUs } from "@/app/[locale]/contact/ContactUs/ContactUs";
import { Stack, Container } from "@mantine/core";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <Container pt={80}>
      <ContactUs locale={locale}></ContactUs>
    </Container>
  );
}
