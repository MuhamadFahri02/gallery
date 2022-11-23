import React from "react";
import {Image} from 'react-bootstrap'
import reogImage from "../img/gallery/Reog.png"
import adatImage from "../img/gallery/Adat.png"
import cantingImage from "../img/gallery/Canting.png"
import kendangImage from "../img/gallery/Kendang.png"
import kuningImage from "../img/gallery/Kuning.png"
import lompatImage from "../img/gallery/Lompat.png"
import tenunImage from "../img/gallery/Tenun.png"
import sapiImage from "../img/gallery/Sapi.png"
import samanImage from "../img/gallery/Saman.png"
import "../styles/styletableimg.css";


const Galleryimg = () => {
  return (
    <section>
      {/* <table className="tableimg">
        <tr>
          <th> <Image src={reogImage} alt="img" className="images" /></th>
          <th> <Image src={kuningImage} alt="img" className="images" /></th>
          <th> <Image src={adatImage} alt="img" className="images" /></th>
        </tr>
        
      </table> */}
      <section>
        
      </section>
 <Image src={reogImage} alt="img" className="images" />
 <Image src={kuningImage} alt="img" className="images" />
    </section>
  );
};

export default Galleryimg;
