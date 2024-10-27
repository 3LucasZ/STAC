"use client";

import {
  NavLink,
  AppShell,
  Burger,
  Title,
  Group,
  useMantineColorScheme,
  ActionIcon,
  useComputedColorScheme,
  Flex,
  Text,
  Stack,
  Space,
  Indicator,
  Divider,
  Container,
  Box,
  Tooltip,
  Kbd,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDashboard,
  IconEye,
  IconSubmarine,
  IconBug,
  IconSettings,
  IconHome,
  IconCamera,
  IconSun,
  IconMoon,
  IconRefresh,
  IconReload,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
