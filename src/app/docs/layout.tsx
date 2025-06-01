import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { IconBook } from "@tabler/icons-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout sidebar={{
      tabs: [
        { 
          title: "Documentación", 
          description: "Documentación del proyecto", 
          url: "/docs",
          icon: <IconBook className="size-8 border-2 rounded-lg  p-1" stroke={2} /> 
        },
      ]
    }} tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
