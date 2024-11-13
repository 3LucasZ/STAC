import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";
import { Translator } from "@/utils";
import data from "../data.json";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

export function ContactIconsList({ locale }: { locale: string }) {
  const t = new Translator(locale);
  const MOCKDATA = [
    {
      title: t.get(data.label.email),
      description: t.get(data.label.email.value),
      icon: IconAt,
    },
    {
      title: t.get(data.label.phone),
      description: t.get(data.label.phone.value),
      icon: IconPhone,
    },
    {
      title: t.get(data.label.hours),
      description: t.get(data.label.hours.value),
      icon: IconSun,
    },
  ];
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
