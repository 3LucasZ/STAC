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
  AspectRatio,
} from "@mantine/core";
import { GoogleMapsEmbed } from "@next/third-parties/google";

import data from "./data.json";
import { Translator } from "@/utils";
import dynamic from "next/dynamic";
import { Room } from "@/components/Room/Room";
import { OfferModal } from "@/components/Promotion/OfferModal";
import { OfferModal2 } from "@/components/Promotion/OfferModal2";
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
  const luxuries = t.get(data.luxuries).map((luxury: string, index: number) => {
    return (
      <List.Item
        key={index}
        style={{
          listStyleType: t.get(data.luxuries).length == 1 ? "none" : "initial",
        }}
      >
        <Text size="xl">{luxury}</Text>
      </List.Item>
    );
  });
  const luxuriesWrapper = <List>{luxuries}</List>;
  // rooms
  const rooms = data.rooms.map((room, index) => {
    return (
      <Room
        name={room.name}
        description={t.get(room.description)}
        locale={locale}
        key={index}
      />
    );
  });
  rooms.pop();
  const roomsWrapper = (
    <Center>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing={40}>
        {rooms}
      </SimpleGrid>
    </Center>
  );
  //ret
  return (
    <Stack gap={0}>
      <HeroImageRight
        title={t.get(data.title)}
        subtitles={t.get(data.subtitles)}
        actionBtnText={t.get(data.actionBtnText)}
        locale={locale}
      />
      {/* <Image src="/images/logo.png" mah={400} w={"auto"} fit="contain" /> */}
      <Container
        // fluid maw={{ base: "100%", sm: "90%", md: "80%" }}
        size={"lg"}
      >
        <Stack>
          <Box h={"20"}></Box>
          <Stack>
            <Title c="teal">{t.get(data.whoWeAre.title)}</Title>
            <Text size="xl">{t.get(data.whoWeAre.text)}</Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
            <Box h={"100%"}>
              <Image
                src="/images/rooms/generic.jpg"
                fit="cover"
                radius={"lg"}
                h={"100%"}
              />
            </Box>
            <Stack>
              <Center>
                <Stack>
                  <Title c={"blue"}>{t.get(data.location.title)}</Title>
                  <Text size="xl">{t.get(data.location.text)}</Text>
                </Stack>
              </Center>
              <GoogleMapsEmbed
                apiKey="AIzaSyBzhWjXgSpbwDRM5WZCjzky3kvyOFXW2Yw"
                height={400}
                width={"100%"}
                mode="view"
                zoom="17"
                center="37.293834,-121.976704"
                language={locale}
              />
            </Stack>
          </SimpleGrid>
          <Title c={"yellow"}>{t.get(data.luxury.title)}</Title>
          <Text size="xl">{t.get(data.luxury.text)}</Text>
          {luxuriesWrapper}

          <Box
            maw={"99%"}
            h="auto"
            // style={{ overflow: "hidden" }}
          >
            <Image360 url="/images/360-interior.jpg" />
            {/* <Image360 url="/images/360-interior2.png" /> */}
            {/* <AspectRatio ratio={16 / 9}>
              <iframe
                src="/images/sweep-interior.mp4"
                title="Video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio> */}
          </Box>

          <Title c={"yellow"} ta={"center"}>
            {t.get(data.roomTypes.title)}
          </Title>
          <Text size="xl" ta={"center"}>
            {t.get(data.roomTypes.subtitle)}
          </Text>
          {roomsWrapper}
          <Text size="xl">{t.get(data.roomTypes.text)}</Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
            <Stack>
              <Title c={"red"}>{t.get(data.partners.title)}</Title>
              <Text size="xl">{t.get(data.partners.text)}</Text>
            </Stack>
            <Image
              src="/images/deanza.jpg"
              fit="cover"
              h="100%"
              radius={"lg"}
            />
          </SimpleGrid>
        </Stack>
      </Container>
      {/* <OfferModal /> */}
      <OfferModal2 />
    </Stack>
  );
}
