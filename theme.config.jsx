import Head from "./components/Head/head";
import Logo from "./components/Logo/Logo";
import HybridSearch from "./components/Search/HybridSearch";
import AdsBlock from "./components/Ads/Block";

import { search } from "./utils";

const hasAlgoliaConfig = Boolean(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID &&
    process.env.NEXT_PUBLIC_ALGOLIA_API_KEY &&
    process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
);

const repository = {
  base: "https://github.com/O-Isaac/Proyecto-Grand-Order-Docs/tree/master",
  project: "https://github.com/O-Isaac/Proyecto-Grand-Order-Docs",
};


export default {
  docsRepositoryBase: repository.base,
  project: { link: repository.project },
  logo: <Logo />,
  search: {
    ...(hasAlgoliaConfig ? { component: HybridSearch } : {}),
    placeholder: "Buscar en la documentacion...",
    emptyResult: "No se encontraron resultados.",
    loading: "Cargando...",
    error: "No se pudo cargar el indice de busqueda."
  },
  useNextSeoProps: search.useNextSeoProps,
  head: Head,
  banner: {
    key: "release-avalon",
    text: (
      <a href="/special/nahuil" target="_blank">
        🌴 Ya esta aqui Lostbelt 7: Nahuil Mictlan!. Leer Mas →
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === "separator" && title === "ads-block") {
        return <AdsBlock />;
      }

      return title;
    },
  },
  feedback: {
    content: "¿Encontraste un error en la documentacion?",
    labels: "feedback, issue",
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      };
    },
  },
};
