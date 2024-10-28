import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroImageRight.module.css";

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Student Apartments{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                Made Simple
              </Text>{" "}
            </Title>

            {/* <Text className={classes.description} mt={30}>
              We aim to bring
            </Text> */}

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="lg"
              maw={300}
              className={classes.control}
              mt={40}
            >
              Book Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
