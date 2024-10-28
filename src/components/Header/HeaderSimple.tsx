import { useState } from "react";
import { Container, Group, Box, Burger, Text } from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";

const preLinks = [
  { link: "/", label: "About Us" },
  { link: "/apply", label: "Apply" },
  { link: "/service", label: "Service" },
  { link: "/partners", label: "Partners" },
  { link: "/contact", label: "Contact Us" },
  { link: "/faq", label: "FAQ" },
];

type HeaderSimpleProps = {
  locale: string;
};
export function HeaderSimple({ locale }: HeaderSimpleProps) {
  const links = preLinks.map((link) => {
    return {
      link: "/" + locale + link.link,
      label: link.label,
    };
  });

  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        router.replace(link.link);
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
    <Text onClick={() => router.replace(newPathname)}>{locale}</Text>
  );

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Box size={28}></Box>
        <Group gap={5} visibleFrom="xs">
          {items}
          {languagePicker}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
