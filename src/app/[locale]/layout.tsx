// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import { Notifications } from "@mantine/notifications";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata = {
  title: "Student Transit Assist Center",
  description: "Student Apartments",
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
    notFound();
  }
}

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
    notFound();
  }

  const messages = await getMessages(locale);
  console.log(messages);

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications />
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
