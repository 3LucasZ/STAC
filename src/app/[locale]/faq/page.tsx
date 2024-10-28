"use client";
import { FaqSimple } from "@/app/[locale]/faq/FaqSimple";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <FaqSimple locale={locale} />;
}
