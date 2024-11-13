import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Box,
  Image,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";

import data from "./data.json";
import { Translator } from "@/utils";

export function FooterLinks({ locale }: { locale: string }) {
  const t = new Translator(locale);
  const content = [
    // {
    //   title: t.get(data.wechat),
    //   links: [
    //     // { label: "1 W Campbell Ave C-31", link: "#" },
    //     // { label: "Campbell, CA 95008", link: "#" },
    //   ],
    // },
    // {
    //   title: t.get(data.line),
    //   links: [],
    // },
    // {
    //   title: t.get(data.whatsapp),
    //   links: [
    //     // { label: "1 W Campbell Ave C-31", link: "#" }
    //   ],
    // },
    {
      title: t.get(data.contacts),
      links: [
        { label: "WeChat", link: "/" + locale + "/contact" },
        { label: "Line", link: "/" + locale + "/contact" },
        { label: "WhatsApp", link: "/" + locale + "/contact" },
      ],
    },
    {
      title: t.get(data.call),
      links: [{ label: "+1 (408) 123 4567", link: "NONE" }],
    },
    {
      title: t.get(data.email),
      links: [{ label: "dongli@stac.com", link: "NONE" }],
    },
  ];
  const groups = content.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        {...(link.link !== "NONE" && { component: "a", href: link.link })}

        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/images/logo.png" h={80} w={"100%"} />
          <Text size="xs" c="dimmed" className={classes.description}>
            {/* Apartments for students. */}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          {t.get(data.copyright)}
        </Text>

        {/* <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}
