import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

export function PDF({ title, href }: { title: string; href: string }) {
  return (
    <Button
      rightSection={<IconDownload size={18} />}
      component="a"
      href={href}
      target="_blank"
      // variant="light"
    >
      {title}
    </Button>
  );
}
