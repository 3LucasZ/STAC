"use client";
import { FaqSimple } from "@/components/FAQ/FaqSimple";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return <FaqSimple />;
}
