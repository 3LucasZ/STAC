import { useState } from "react";
import {
  Container,
  Group,
  Box,
  Burger,
  Text,
  Drawer,
  Image,
  Stack,
} from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Translator } from "@/utils";
import data from "./data.json";

type HeaderSimpleProps = {
  locale: string;
};
export function HeaderSimple({ locale }: HeaderSimpleProps) {
  const t = new Translator(locale);
  const preLinks = [
    { link: "", label: t.get(data.aboutUs) },
    { link: "/apply", label: t.get(data.apply) },
    { link: "/service", label: t.get(data.service) },
    { link: "/contact", label: t.get(data.contactUs) },
    { link: "/faq", label: t.get(data.faq) },
  ];
  const links = preLinks.map((link) => {
    return {
      link: "/" + locale + link.link,
      label: link.label,
    };
  });

  const router = useRouter();
  const pathname = usePathname();

  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const newPathname =
    locale == "en"
      ? pathname.replace("en", "zh")
      : pathname.replace("zh", "en");
  const languagePicker = (
    <Text onClick={() => router.push(newPathname)} c={"blue"}>
      {locale == "en" ? "English" : "中文"}
    </Text>
  );

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <Box size={28}></Box> */}
        <Image h={40} src={"/STAC/images/mini-logo.png"} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Box visibleFrom="xs">{languagePicker}</Box>
        <Burger opened={false} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
      <Drawer
        opened={opened}
        onClose={toggle}
        position={"right"}
        offset={8}
        radius={"md"}
        size={"sm"}
      >
        <Stack>
          {items}
          <Box p={8}>{languagePicker}</Box>
        </Stack>
      </Drawer>
    </header>
  );
}
