"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { Stack, Container } from "@mantine/core";

export default function Home() {
  return (
    <Container pt={80}>
      <ContactUs></ContactUs>
    </Container>
  );
}
