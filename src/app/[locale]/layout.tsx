// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import { Notifications } from "@mantine/notifications";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata = {
  title: "Student Transit Assist Center",
  description: "Student Apartments",
};

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "zh"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!["en", "zh"].includes(locale as any)) {
    console.log("requested locale not found");
    notFound();
  }

  return (
    <html lang={locale}>
      <head>{/* <ColorSchemeScript /> */}</head>
      <body>
        <MantineProvider>
          <Notifications />
          <Layout locale={locale}>{children}</Layout>
        </MantineProvider>
        <GoogleAnalytics gaId="G-HMXZF1HKM6" />
      </body>
    </html>
  );
}
