import { Container, Title, Text, Button, Box } from "@mantine/core";
import classes from "./HeroImageRight.module.css";
import { useRouter } from "next/navigation";

export function HeroImageRight({
  title,
  subtitles,
  actionBtnText,
  locale,
}: {
  title: string;
  subtitles: string[];
  actionBtnText: string;
  locale: string;
}) {
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Container size="lg" h={{ base: 400, xs: 500, sm: 600, md: 800 }}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} c={"white"}>
              {title}{" "}
            </Title>
            {subtitles.map((subtitle, index) => (
              <Title className={classes.title} key={index}>
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "pink", to: "yellow" }}
                >
                  {subtitle}
                </Text>
              </Title>
            ))}
            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="lg"
              maw={300}
              className={classes.control}
              mt={40}
              onClick={() => router.push("/" + locale + "/apply")}
            >
              {actionBtnText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

/*
<Box
  bg={"rgba(255, 255, 255, 0.5)"}
  p={16}
  style={{ borderRadius: 8 }}
></Box>
*/
