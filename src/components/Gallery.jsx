import { Card, Container, Row, Col, Image } from "react-bootstrap"
import reogImage from "../img/gallery/Reog.png"
import adatImage from "../img/gallery/Adat.png"
import cantingImage from "../img/gallery/Canting.png"
import kendangImage from "../img/gallery/Kendang.png"
import kuningImage from "../img/gallery/Kuning.png"
import lompatImage from "../img/gallery/Lompat.png"
import tenunImage from "../img/gallery/Tenun.png"
import sapiImage from "../img/gallery/Sapi.png"
import samanImage from "../img/gallery/Saman.png"


const Galleryimgs = () => {
    return (
      <div>
        <Container>
          <br />
          <br />
          <Row>
            <Col md={4} className="galleryWrapper" id="trending">
              <Card className="fotoImage">
                <Image src={reogImage} alt="img" className="images" />
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image
                  src={kuningImage}
                  alt="img"
                  className="images"
                />
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={adatImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={8} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={samanImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image
                  src={lompatImage}
                  alt="img"
                  className="images"
                />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={kendangImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={cantingImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={kendangImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={8} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={sapiImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={tenunImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={reogImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={kuningImage} alt="img" className="images" />
                
              </Card>
            </Col>
            <Col md={4} className="galleryWrapper">
              <Card className="fotoImage">
                <Image src={adatImage} alt="img" className="images" />
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default Galleryimgs
  