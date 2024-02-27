import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [starlight({
    title: 'Proyecto Grand Order',
    logo: {
      src: "./src/assets/logo.svg"
    },
    favicon: "./src/assets/logo.svg",
    social: {
      github: 'https://github.com/O-Isaac/Proyecto-Grand-Order-Docs',
      discord: "https://discord.gg/fate-go-esp",
      facebook: "https://www.facebook.com/groups/fgo.esp/",
      "x.com": "https://x.com/fgo_esp"
    },
    customCss: [
    './src/custom.css',
    ],
    sidebar: [{
      label: 'Rayshift Translate App',
      items: [
        {
          label: "Descargar",
          link: "/rayshift/descarga"
        },
        {
          label: "Desinstalar",
          link: "/rayshift/deinstalar/"
        },
        {
          label: "Actualizar",
          link: "/rayshift/actulizar/"
        },
        {
          label: "Preguntas Frecuentes",
          link: "/rayshift/preguntas/",
        },
      ],
    },
    {
      label: "Proyecto Grand Order",
      autogenerate: {
        directory: "pgo"
      }
    }
  ]
  })]
});