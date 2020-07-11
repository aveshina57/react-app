import React from "react";
import "../footer/style.scss";
import twitter from "../image/twitter.png";
import dribble from "../image/dribble.png";
import linkedin from "../image/linkedin.png";
import instagram from "../image/instagram.png";
import facebook from "../image/facebook.png";

export default function Home() {
  return (
    <footer>
      <h1 id="find"> Find Me</h1>
      <div className="flex_footer">
        <div className="image_footer one">
          {" "}
          <img src={facebook} className="iamge_f" />{" "}
        </div>
        <div className="image_footer two">
          {" "}
          <img src={instagram} className="iamge_f" />{" "}
        </div>
        <div className="image_footer three">
          {" "}
          <img src={linkedin} className="iamge_f" />{" "}
        </div>
        <div className="image_footer four">
          {" "}
          <img src={dribble} className="iamge_f" />{" "}
        </div>
        <div className="image_footer five">
          {" "}
          <img src={twitter} className="iamge_f" />{" "}
        </div>
      </div>
      <p>Supported by Sanbercode</p>
    </footer>
  );
}
