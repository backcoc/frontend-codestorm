import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { render } from 'react-dom';
// import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "gatsby-transformer-sharp";
import SwiperCore, { Pagination, Navigation } from "swiper";
// import Modal from "@/components/portfoliomodal";
// /import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"


SwiperCore.use([Pagination, Navigation]);
const ProtfolioDetails = (data) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  if (modalIsOpen == true) {
    return (
      // <div>
        
      // </div>
      <div className = "swipo">
        <Swiper pagination={{
          "type": "fraction"
        }} navigation={true} className="mySwiper">
        {data.data.pageContext.data.image.map((img, index) => (
          <SwiperSlide id="swiper">
            <img src={img.localFile.childImageSharp.gatsbyImageData.images.fallback.src}></img>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    )
  }
  else {
    return (
      <section className="commonSection porfolioDetail">
        <Container>
          {/* <div className="swiper-pagination" id="team-carousel-pagination"></div> */}

          <Col className="Col-lg-3" >
            <Row lg={3} md={7} sm={12}>
              {/* <div className="portDetailThumb" onClick = {()=>{ModalPortfolio}}> */}
              {data.data.pageContext.data.image.map((img, index) => (
                <div className="portDetailThumb" onClick={() => setModalIsOpen(true)}>
                  <img src={img.localFile.childImageSharp.gatsbyImageData.images.fallback.src}></img>
                </div>
              ))}
              {/* </div> */}
              <Col lg={4} md={5} sm={12}>
                <div className="singlePortfoio_content">
                  <h3>{data.data.pageContext.data.title}</h3>
                  <ReactMarkdown children={data.data.pageContext.data.body} />
                </div>
                <div className="singlePortfoio_content">
                  <h4>Category:</h4>
                  <p>
                    {data.data.pageContext.data.categories}
                    {/* {categories.map(({ name }, index) => (
                  <a key={index} href={url}>
                    {name},
                  </a>
                ))} */}
                  </p>
                </div>
                <div className="singlePortfoio_content">
                  <h4>Date:</h4>
                  <p>{data.data.pageContext.data.date}</p>
                </div>
                {/* <Modal
                  open={modalIsOpen}
                //  onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                >
                  my Modal
                </Modal> */}
                {/* <div className="swiper-pagination" id="team-carousel-pagination"></div> */}
              </Col>
            </Row>
          </Col>
        </Container>
      </section>
    );
  };
}

export default ProtfolioDetails;
