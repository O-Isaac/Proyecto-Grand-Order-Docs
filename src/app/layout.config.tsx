import Logo from "@/components/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Fragment } from "react";
import { IconBook } from "@tabler/icons-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Fragment>
        <Logo className="size-9 aspect-square object-contain dark:fill-white" />
        Proyecto Grand Order
      </Fragment>
    ),
  },
  githubUrl: "https://google.es",
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Documentación",
      url: "/docs",
      // secondary items will be displayed differently on navbar
      secondary: false,
      icon: <IconBook stroke={2} />,
    },
  ],
};
