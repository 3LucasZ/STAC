// components/OfferBanner.tsx
"use client"; // This component uses hooks, so it must be a client component
import classes from "./OfferBanner.module.css"; // Import the CSS module

import { Translator } from "@/utils";
import {
  Affix,
  Alert,
  Transition,
  Text,
  Anchor,
  rem,
  Button,
} from "@mantine/core";
import { useSessionStorage } from "@mantine/hooks";
import { IconGift } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import data from "./data.json";

export function OfferBanner({ locale }: { locale: string }) {
  const t = new Translator(locale);
  // -- UNCOMMENT IF NECESSARY -- Use session storage to remember if the banner was closed
  // const [bannerClosed, setBannerClosed] = useSessionStorage({
  //   key: "offer-banner-closed",
  //   defaultValue: false,
  // });
  const [bannerClosed, setBannerClosed] = useState(false);
  const router = useRouter();

  const icon = (
    <span className={classes.iconWrapper}>
      <span className={`${classes.star} ${classes.star1}`}>✦</span>
      <span className={`${classes.star} ${classes.star2}`}>✦</span>
      <span className={`${classes.star} ${classes.star3}`}>✦</span>

      <span className={classes.animatedIcon}>
        <IconGift />
      </span>
    </span>
  );

  return (
    <Affix position={{ bottom: 0, left: 0, right: 0 }}>
      <Transition transition="scale-y" mounted={!bannerClosed}>
        {(transitionStyles) => (
          <Alert
            variant="filled"
            title={t.get(data.a)}
            color="blue"
            icon={icon}
            withCloseButton
            onClose={() => setBannerClosed(true)}
            // radius={10}
            style={transitionStyles}
            classNames={{ root: classes.animatedBorderBanner }}
          >
            <Text>
              {t.get(data.b)}
              <Button
                color="indigo"
                mx={16}
                onClick={() => router.push("/" + locale + "/apply")}
              >
                {t.get(data.c)}
              </Button>
            </Text>
          </Alert>
        )}
      </Transition>
    </Affix>
  );
}
