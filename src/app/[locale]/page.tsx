"use client";
import { HeroImageRight } from "@/app/[locale]/HeroImageRight/HeroImageRight";
import {
  Box,
  Stack,
  Title,
  Text,
  Image,
  Container,
  Center,
  SimpleGrid,
  List,
} from "@mantine/core";
import { GoogleMapsEmbed } from "@next/third-parties/google";

import data from "./data.json";
import { Translator } from "@/utils";
import dynamic from "next/dynamic";
const Image360 = dynamic(
  () => import("@/components/Image360").then((mod) => mod.default),
  {
    ssr: false,
  }
);

type PageProps = {
  params: { locale: string };
};

export default function Page({ params: { locale } }: PageProps) {
  const t = new Translator(locale);

  // luxuries
  const luxuries = data.luxuries.map((luxury) => {
    return (
      <List.Item>
        <Text size="xl">{t.get(luxury)}</Text>
      </List.Item>
    );
  });
  const luxuriesWrapper = <List>{luxuries}</List>;
  // rooms
  const rooms = data.rooms.map((room) => {
    return (
      <List.Item>
        <Text size="xl">{t.get(room)}</Text>
      </List.Item>
    );
  });
  const roomsWrapper = <List>{rooms}</List>;
  //ret
  return (
    <Stack gap={0}>
      <HeroImageRight
        title={t.get(data.title)}
        subtitle={t.get(data.subtitle)}
        actionBtnText={t.get(data.actionBtnText)}
      />
      {/* <Image src="/STAC/images/logo.png" mah={400} w={"auto"} fit="contain" /> */}
      <Container>
        <Stack>
          <Box h={"20"}></Box>
          <Stack>
            <Title c="teal">Who we are</Title>
            <Text size="xl">
              The Student Transit Assist Center (known as STAC) is located in
              San Jose, in the heart of Silicon Valley, California. We are
              dedicated to serving international students attending schools in
              this region. We firmly believe that success comes from
              professional and comprehensive service. Currently, our center has
              established long-term strategic partnerships with a number of
              renowned educational institutions in the United States and
              well-known study abroad agencies in China. Based on a thorough
              review of our past services, we are committed to creating a more
              efficient, effective, and comprehensive one-stop service for
              studying in the U.S. We provide a range of services to support
              students' transitions, including housing assistance, student
              supervision and management, academic advising, tutoring, and more.
              However, we are not an agency and do not provide agency services.
              Our 24/7 services assist students in case of emergencies, ensuring
              a smooth transition to school and dorm life.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
            <Box h={"100%"}>
              <Image
                src="/STAC/images/location.jpg"
                fit="cover"
                radius={"lg"}
                h={"100%"}
              />
            </Box>
            <Stack>
              <Center>
                <Stack>
                  <Title c={"blue"}>Location</Title>
                  <Text size="xl">
                    STAC Dormitory is conveniently located near the headquarters
                    of Apple Inc. and just a 10-minute walk from Westgate
                    Shopping Center, where you can find everything you need. The
                    bus stop is right in front of the STAC dorm, offering easy
                    access to anywhere you want to go.
                  </Text>
                </Stack>
              </Center>
              <GoogleMapsEmbed
                apiKey="AIzaSyBzhWjXgSpbwDRM5WZCjzky3kvyOFXW2Yw"
                height={200}
                width={"100%"}
                mode="place"
                zoom="17"
                center="37.2882,-121.9521"
                q="Campbell+Community+Center"
              />
            </Stack>
          </SimpleGrid>
          <Title c={"yellow"}>Luxurious</Title>
          <Text size="xl">
            High-quality, affordable private spaces where you can enjoy
            comfortable accommodation.
          </Text>
          {luxuriesWrapper}
          <Center>
            <Box w={"80%"}>
              <Image360 url="/STAC/images/360-interior.jpg" />
            </Box>
          </Center>
          <Title c={"yellow"}>Room types</Title>
          {roomsWrapper}
          <Text size="xl">
            Prices vary based on the type of room. Please check for the price
            and availability.
          </Text>
          <Text size="xl">
            The demand for the dormitory is extremely high in Silicon Valley
            Area. Space at STAC is limited. Join US now!
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
            <Stack>
              <Title c={"red"}>Partners</Title>
              <Text size="xl">
                STAC Apartments are the officially recommended dormitories for
                DeAnza College. We provide the most convenient and professional
                service experience for our partners. With 24/7 service and
                security monitoring, we significantly reduce the service load on
                partners for your students after arriving in the U.S. Welcome to
                all educational agencies and institutions for collaboration. We
                aim to become your long-term partner in providing services for
                your students.
              </Text>
            </Stack>
            <Image
              src="/STAC/images/deanza.jpg"
              fit="cover"
              h="100%"
              radius={"lg"}
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Stack>
  );
}
