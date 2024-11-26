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

import { useState } from "react";
import { notifications } from "@mantine/notifications";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs({ locale }: { locale: string }) {
  const t = new Translator(locale);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  function sendEmail() {
    const data = {
      name: name,
      message: msg,
      email: email,
    };
    const url =
      "https://script.google.com/macros/s/AKfycby6lNwN4fZcZEhu6fGGmXF2QnBkWZh3Aj_YaWR8hv5hZ3NM7lABxbd5rBmNMrtVe9ZyVA/exec";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setEmail("");
          setName("");
          setMsg("");
          notifications.show({
            color: "green",
            title: "Thank you!",
            message: "We will contact you back soon!",
            autoClose: 8000,
          });
        } else {
          notifications.show({
            color: "red",
            title: "Server error " + xhr.status,
            message:
              "Sorry, our email service is down right now. Please email us directly instead.",
            autoClose: 8000,
          });
        }
        setIsLoading(false);
      }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function (k) {
        return (
          encodeURIComponent(k) +
          "=" +
          encodeURIComponent(data[k as keyof typeof data])
        );
      })
      .join("&");
    xhr.send(encoded);
  }

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>{t.get(data.title)}</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            {t.get(data.subtitle)}
          </Text>

          <ContactIconsList locale={locale} />

          {/* <Group mt="xl">{icons}</Group> */}
        </div>
        <div className={classes.form}>
          <TextInput
            label={t.get(data.label.email)}
            // placeholder="your@email.com"
            required
            onChange={(x) => setEmail(x.target.value)}
            value={email}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label={t.get(data.label.name)}
            // placeholder="your name"
            onChange={(x) => setName(x.target.value)}
            value={name}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label={t.get(data.label.message)}
            // placeholder="your message"
            onChange={(x) => setMsg(x.target.value)}
            value={msg}
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button
              className={classes.control}
              onClick={() => {
                setIsLoading(true);
                sendEmail();
              }}
              loading={isLoading}
            >
              {t.get(data.actionBtn)}
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
