"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { List, Stack, Title, Text, Container } from "@mantine/core";

export default function Home() {
  return (
    <Stack>
      <Title ta="center" py={20}>
        Dorm Applications
      </Title>
      <Container>
        <Stack>
          <Text>
            All application documents must be original or certified; no e-mail,
            scans or, copies will be accepted.
          </Text>
          <Title order={3}>Application Checklist:</Title>
          <List>
            {" "}
            <List.Item>
              Complete, sign, and return this application form with a copy of
              the photo page in your passport. (Download link)
            </List.Item>
            <List.Item>
              Attach a recent photograph to the application form.
            </List.Item>
            <List.Item>
              Submit an original bank letter dated within the last 6 months with
              an official signature on bank letterhead that verifies the current
              balance in USD of your account or your sponsor's/guardian's
              account.
            </List.Item>
            <List.Item>
              Submit proof of medical insurance or travel insurance.
            </List.Item>
            <List.Item>
              Submit the credit card authorization for the fees.
            </List.Item>
            <List.Item>
              Submit the Parental Release Form for a minor student along with
              the refundable credit card authorization for the Guardianship
              Service Charge (if you are under 18 years old). (Download link)
            </List.Item>
          </List>
        </Stack>
      </Container>
    </Stack>
  );
}
