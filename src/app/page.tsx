"use client";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { HeroImageRight } from "@/components/HeroImageRight/HeroImageRight";
import {
  Box,
  Card,
  Group,
  Stack,
  Title,
  Text,
  Divider,
  SimpleGrid,
  Image,
  Container,
} from "@mantine/core";

export default function Home() {
  return (
    <Stack gap={0}>
      <HeroImageRight />
      <Image src="/images/logo.png" mah={400} w={"auto"} fit="contain" />
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
      <Box h={200}></Box>
    </Stack>
  );
}
