"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { Stack } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <Stack gap={0}>
      <ContactUs></ContactUs>
    </Stack>
  );
}
