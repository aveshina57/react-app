import React, { useEffect } from "react";

import { icon1, icon2, icon3, icon4 } from "./home/index";

export default function Skill() {
  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);

  return (
    <article className="slide">
      <div className="content">
        <h1>Skill</h1>

        <section id="skill_left">
          <img src={icon1} className="skill_left_image"></img>
          <img src={icon2} className="skill_left_image"></img>
          <img src={icon3} className="skill_left_image"></img>
          <img src={icon4} className="skill_left_image"></img>
        </section>
      </div>
    </article>
  );
}
