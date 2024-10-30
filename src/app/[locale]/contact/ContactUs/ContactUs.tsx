import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

import classes from "./ContactUs.module.css";
import { ContactIconsList } from "./ContactIcons";
import { Translator } from "@/utils";
import data from "../data.json";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs({ locale }: { locale: string }) {
  const t = new Translator(locale);
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>{t.get(data.title)}</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            {t.get(data.subtitle)}
          </Text>

          <ContactIconsList locale={locale} />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label={t.get(data.label.email)}
            // placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label={t.get(data.label.name)}
            // placeholder="your name"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label={t.get(data.label.message)}
            // placeholder="your message"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>{t.get(data.actionBtn)}</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
