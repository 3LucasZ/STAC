import { useState } from "react";
import { Container, Group, Box } from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import { useRouter } from "next/navigation";

const links = [
  { link: "/", label: "About Us" },
  { link: "/service", label: "Service" },
  { link: "/partners", label: "Partners" },
  { link: "/contact", label: "Contact Us" },
  { link: "/faq", label: "FAQ" },
];

export function HeaderSimple() {
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
      <Container size="lg" className={classes.inner}>
        <Box size={28}>STAC</Box>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}
