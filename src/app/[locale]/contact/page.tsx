"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack gap={0}>
      <ContactUs></ContactUs>
    </Stack>
  );
}
