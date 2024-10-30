"use client";

import { Stack } from "@mantine/core";
import { HeaderSimple } from "./Header/HeaderSimple";
import { FooterLinks } from "./Footer/Footer";

export default function Layout({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSimple locale={locale} />
      <Stack gap={0} mih={"100vh"}>
        {children}
      </Stack>
      <FooterLinks locale={locale} />
    </>
  );
}
