import Head from "./components/Head/head";
import Logo from "./components/Logo/Logo";
import { search } from "./utils";

const repository = {
  base: "https://github.com/O-Isaac/Proyecto-Grand-Order-Docs/tree/master",
  project: "https://github.com/O-Isaac/Proyecto-Grand-Order-Docs",
};

export default {
  docsRepositoryBase: repository.base,
  project: { link: repository.project },
  logo: <Logo />,
  useNextSeoProps: search.useNextSeoProps,
  head: Head,
  banner: {
    key: "release-avalon",
    text: (
      <a href="/special/traum" target="_blank">
        🎉 Ya esta aqui Traum!. Leer Mas →
      </a>
    ),
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      }
    }
  }
};
