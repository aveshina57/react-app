import React, { useEffect } from "react";

import { image1, image2, image3, image4 } from "../views/home/index";

export default function Mood() {
  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
  }, []);

  return (
    <article class="slide">
      <div class="content">
        <h2>My Mood</h2>
        <section id="flex">
          <div className="box one">
            <img src={image1} alt="iamge" className="porto_image" />
          </div>
          <div className="box two">
            <img src={image2} alt="iamge" className="porto_image" />
          </div>
          <div className="box three">
            <img src={image3} alt="iamge" className="porto_image" />
          </div>
          <div className="box four">
            <img src={image4} alt="iamge" className="porto_image" />
          </div>
        </section>

        <p id="source"> source from : https://paranoidandroid.co/wallpapers</p>
      </div>
    </article>
  );
}
