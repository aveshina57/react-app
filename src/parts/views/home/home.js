import React from "react";

import { profil, monster1 } from "../home/index";

export default function Home() {
  return (
    <main>
      <div class="left1">
        <article class="slide">
          <div class="content">
            <section id="profil_left">
              <img src={monster1} id="profil_image"></img>
            </section>
            <section id="profil_right">
              <div id="deskripsi">
                <h2>Profil</h2>
                <p>
                  {" "}
                  Nama Saya adalah Ave syah shina, saya berumur 19 tahun, lahir
                  di Semarang dan sekarang berdomisili Yogjakarta, saya adalah
                  seseorang dengan kreativitas, inovasi dan keinginan tahuan
                  tinggi dalam dunia digital yang berlandaskan kejujuran dan
                  sikap toleran, selain itu, saya juga menyukai segala kegiatan
                  yang berhubungan dengan sosial dan alam.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>

      <aside class="right1">
        <div class="card-container">
          <div class="upper-container">
            <div class="image-container">
              <img src={profil} />
            </div>
          </div>

          <div class="lower-container">
            <div id="bio">
              <h2 id="name">Ave Syah Shina</h2>
              <h3>Information Technology UGM</h3>
              <p id="motto">
                "setiap diri kita mempunyai batas, tetapi misi kita adalah
                melampaui batas"
              </p>
              <div>
                <a href="#" class="btn">
                  {" "}
                  view profil
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
