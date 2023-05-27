import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Arrow, Fade } from "@egjs/flicking-plugins";

import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/flicking-plugins/dist/arrow.css";

export default function Carousel({ children }) {
  const plugins = [
    new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false }),
    new Arrow(),
    new Fade(),
  ];

  return (
    <Flicking circular align="center" defaultIndex={1} plugins={plugins}>
      {children}
      <ViewportSlot>
        <span className="left flicking-arrow-prev"></span>
        <span className="flicking-arrow-next right"></span>
      </ViewportSlot>
    </Flicking>
  );
}
