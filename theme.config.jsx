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
  head: Head
};
