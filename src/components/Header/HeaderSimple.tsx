import { useState } from "react";
import { Container, Group, Box, Burger } from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import { useRouter } from "next/navigation";
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
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const router = useRouter();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Box size={28}></Box>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
