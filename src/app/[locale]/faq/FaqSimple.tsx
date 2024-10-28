import { Container, Title, Accordion } from "@mantine/core";
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
    <Container size="lg" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">{items}</Accordion>
    </Container>
  );
}
