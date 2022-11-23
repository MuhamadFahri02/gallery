import React from "react";
import { Image } from "react-bootstrap";
import reogImage from "../img/gallery/Reog.png";
import adatImage from "../img/gallery/Adat.png";
import kuningImage from "../img/gallery/Kuning.png";

import samanImage from "../img/gallery/Saman.png";
import lompatImage from "../img/gallery/Lompat.png";
import kendangImage from "../img/gallery/Kendang.png";
import cantingImage from "../img/gallery/Canting.png";

import tenunImage from "../img/gallery/Tenun.png";
import sapiImage from "../img/gallery/Sapi.png";
import "../styles/styletableimg.css";

const Galleryimg = () => {
  return (
    <section className="container gallery">
      <section className="gallery-1">
        <Image src={reogImage} alt="img" className="images" />
        <Image src={kuningImage} alt="img" className="images" />
        <Image src={adatImage} alt="img" className="images" />
      </section>
      <section className="gallery-2-container">
        <section className="gallery-2">
          <Image src={samanImage} alt="img" className="images" />
          <section className="gallery-2-bottom">
            <Image src={kendangImage} alt="img" className="images" />
            <Image src={cantingImage} alt="img" className="images" />
          </section>
        </section>
        <Image src={lompatImage} alt="img" className="images" />
      </section>
      <section className="gallery-3">
        <Image src={sapiImage} alt="img" className="images" />
        <Image src={tenunImage} alt="img" className="images" />
      </section>
    </section>
  );
};

export default Galleryimg;
