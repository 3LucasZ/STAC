"use client";

import { Stack } from "@mantine/core";
import { HeaderSimple } from "./Header/HeaderSimple";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack gap={0}>
      <HeaderSimple />
      {children}
    </Stack>
  );
}
