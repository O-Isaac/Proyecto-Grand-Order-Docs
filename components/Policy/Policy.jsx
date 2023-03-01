import { useEffect } from "react";
import styles from "./Policy.module.css";

export default function Card() {
  const { card, cards, cardContent, cardBorder } = styles;

  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });

  /**
   * <Policy href="https://drive.google.com/file/d/1gsylAEfdtnDa-W3Y5Q8MITJPt_dpeKKD/view" title="Privacy Policy" description="This Privacy Policy establishes the terms in which Fate/Grand Order (Spanish Project) uses or
does not use the information that is provided by its users when using its website and how it
does not collect or store any data from the App that we provide to patch FGO." />
   */

  return (
    <div id="cards" className={cards}>
      <a href="https://drive.google.com/file/d/1-hFZ6As-YTuGxxWQKKl-jo43UYzd6y51/view" target="_blank">
        <div className={card + " card"}>
          <div className={cardBorder}></div>
          <div className={cardContent}>
            <div className="text-center">
              <h3 className="text-4xl font-bold leading-normal">
                Politica de privacidad
              </h3>
              <h4>Click para leer</h4>
            </div>
          </div>
        </div>
      </a>

      <a href="https://drive.google.com/file/d/1gsylAEfdtnDa-W3Y5Q8MITJPt_dpeKKD/view" target="_blank">
        <div className={card + " card"}>
            <div className={cardBorder}></div>
            <div className={cardContent}>
            <div className="text-center">
                <h3 className="text-4xl font-bold leading-normal">Privacy Policy</h3>
                <h4>Click here to read!</h4>
            </div>
            </div>
        </div>
      </a>
    </div>
  );
}
