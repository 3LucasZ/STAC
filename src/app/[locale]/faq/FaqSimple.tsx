import { Container, Title, Accordion, Center } from "@mantine/core";
import classes from "./FaqSimple.module.css";
import { Translator } from "@/utils";
import data from "./data.json";

export function FaqSimple({ locale }: { locale: string }) {
  const t = new Translator(locale);
  const items = data.faqs.map((item, index) => (
    <Accordion.Item className={classes.item} value={"" + index} key={index}>
      <Accordion.Control>{t.get(item.q)}</Accordion.Control>
      <Accordion.Panel>{t.get(item.a)}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Container
      size="lg"
      className={classes.wrapper}
      miw={{ base: "100%", xs: "90%", sm: "80%", md: "70%" }}
      maw={{ base: "100%", xs: "90%", sm: "80%", md: "70%" }}
    >
      <Title ta="center" className={classes.title}>
        {t.get(data.title)}
      </Title>
      <Center miw={"100%"}>
        <Accordion variant="separated" miw={"100%"}>
          {items}
        </Accordion>
      </Center>
    </Container>
  );
}
