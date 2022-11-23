import Galleryimgs from "../components/Gallery";
import Galleryimg from "../components/galleryimg";
import Herogallery from "../components/Herogallery";
import HOC from "../components/HOC";
import "../styles/styles.css";

const Gallery = () => {
  return (
    <HOC headerTitle="Gallery">
      <Herogallery />
      {/* <Galleryimgs /> */}
      <Galleryimg />
    </HOC>
  );
};

export default Gallery;
