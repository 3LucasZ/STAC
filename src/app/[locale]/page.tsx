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
  return (
    <Stack gap={0}>
      <HeroImageRight
        title={t.get(data.title)}
        subtitle={t.get(data.subtitle)}
        actionBtnText={t.get(data.actionBtnText)}
      />
      <Image src="/STAC/images/logo.png" mah={400} w={"auto"} fit="contain" />
      <Center>
        <Box w={"80vw"}>
          <Image360 url="/STAC/images/360-interior.jpg" />
        </Box>
      </Center>
      <GoogleMapsEmbed
        apiKey="AIzaSyBzhWjXgSpbwDRM5WZCjzky3kvyOFXW2Yw"
        height={500}
        width={500}
        mode="place"
        zoom="17"
        center="37.2882,-121.9521"
        q="Campbell+Community+Center"
      />
      <Container>
        <Text>
          The Student Transit Assist Center (known as STAC) is located in San
          Jose, in the heart of Silicon Valley, California. We are dedicated to
          serving international students attending schools in this region. We
          firmly believe that success comes from professional and comprehensive
          service. Currently, our center has established long-term strategic
          partnerships with a number of renowned educational institutions in the
          United States and well-known study abroad agencies in China. Based on
          a thorough review of our past services, we are committed to creating a
          more efficient, effective, and comprehensive one-stop service for
          studying in the U.S. We provide a range of services to support
          students’ transitions, including housing assistance, student
          supervision and management, academic advising, tutoring, and more.
          However, we are not an agency and do not provide agency services. STAC
          Dormitory is conveniently located near the headquarters of Apple Inc.
          and just a 10-minute walk from Westgate Shopping Center, where you can
          find everything you need. The bus stop is right in front of the STAC
          dorm, offering easy access to anywhere you want to go. Our 24/7
          services assist students in case of emergencies, ensuring a smooth
          transition to school and dorm life.
        </Text>
      </Container>
      <Container>
        <Text>
          High-quality, affordable private spaces where you can enjoy
          comfortable accommodation: - Free public Wi-Fi - Breakfast is provided
          on weekdays except on holidays - Monthly reports can be requested by
          parents. - Fully furnished - Kitchen, dining room, and laundry
          facilities are communal - Own Refrigerator - Air conditioning - Key
          card access Single rooms: one twin XL bed, Each bathroom is shared by
          only two students. Bunk beds room: Two beds at top bunk and lower
          bunk, shared bathroom. 2 Queen Room: Two queen size beds with own
          bathroom King Room: One king size beds with own bathroom One bed room
          suite with kitchenette and own bathroom Prices vary based on the type
          of room. Please check for the price and availability. The demand for
          the dormitory is extremely high in Silica Valley Area. Space at STAC
          is limited. Join US now!
        </Text>
      </Container>
      <Title>Partners</Title>
      <Text>
        STAC Apartments are the officially recommended dormitories for DeAnza
        College. We provide the most convenient and professional service
        experience for our partners. With 24/7 service and security monitoring,
        we significantly reduce the service load on partners for your students
        after arriving in the U.S. Welcome to all educational agencies and
        institutions for collaboration. We aim to become your long-term partner
        in providing services for your students.
      </Text>
      <Box h={200}></Box>
    </Stack>
  );
}
