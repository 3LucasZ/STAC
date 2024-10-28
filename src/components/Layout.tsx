"use client";

import { Stack } from "@mantine/core";
import { HeaderSimple } from "./Header/HeaderSimple";

export default function Layout({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap={0}>
      <HeaderSimple locale={locale} />
      {children}
    </Stack>
  );
}
